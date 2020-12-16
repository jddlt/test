import React from 'react'
import Taro from '@tarojs/taro'
import Page from '@/components/Page'
import TButton from '@/components/Button'
import TImage from '@/components/Image'
import { setUserInfoAction } from '@/store/action/userInfo'
import { View, Text, BaseEventOrig } from '@tarojs/components'
import { useDispatch } from 'react-redux'
import { IAction, IUserInfo } from '@/store/index.d'
import useLogin from '@/hooks/useLogin'
import { ButtonProps } from '@tarojs/components/types/Button'
import styles from './index.module.less'

type Dispatch<T> = (action: T) => void

const Login = (): React.ReactElement => {
  const code = useLogin()
  const dispatch: Dispatch<IAction<IUserInfo>> = useDispatch()
  const getUserInfo = (res: BaseEventOrig<ButtonProps.onGetUserInfoEventDetail>) => {
    console.log(res)

    if (res.detail.errMsg === 'getUserInfo:ok') {
      dispatch(setUserInfoAction(res.detail.userInfo))
      const CurrentPage = Taro.getCurrentPages()
      const CurrentPageLength = Taro.getCurrentPages().length
      const prePage = CurrentPage[CurrentPageLength - 2]?.route
      if (prePage === 'pages/mine/index') {
        Taro.reLaunch({
          url: `/${prePage}`,
        })
      } else {
        Taro.redirectTo({
          url: '/pages/result/index',
        })
      }

      console.log('code', code)
    } else {
      Taro.showToast({
        title: '获取用户信息失败',
        icon: 'none',
      })
    }
  }
  const getPhone = res => {
    Taro.showToast({
      title: '以后在获取',
      icon: 'none',
    })
    // console.log('phone', res)
    // Taro.navigateTo({
    //   url: '/pages/result/index',
    // })
  }

  return (
    <Page className={styles.login}>
      <TImage
        src="https://s.freshtxp.com/guide/undefined/2020-12-04/9122e0d7f2794dd6bce1393f0b9f7343.png"
        width={176}
        mode="widthFix"
        height={244}
        loading={false}
        top={96}
      />
      <TButton
        type="primary"
        className={styles.loginButton}
        width={686}
        height={92}
        openType="getUserInfo"
        onGetUserInfo={getUserInfo}
      >
        微信登录
      </TButton>
      <TButton
        openType="getPhoneNumber"
        onGetPhoneNumber={getPhone}
        className={styles.partnerLoginButton}
        width={684}
        height={90}
      >
        已有合伙人账号登录
      </TButton>
      <View className={styles.agreement}>
        <Text>登录表示同意 </Text>
        <Text className={styles.rule}>天鲜配生鲜平台代理合作协议</Text>
      </View>
    </Page>
  )
}

export default React.memo(Login)
