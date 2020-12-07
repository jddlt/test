import React from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import Page from '@/components/Page'
// import TButton from '@/components/Button'
import { Image, View, Text, Button } from '@tarojs/components'
import styles from './index.module.less'
// import { GetMoney } from '@/network/api'
// import { useSelector, useDispatch } from 'react-redux'
// import { IState, IAction } from '@/store/types'

type Dispatch<T> = (action: T) => void

const Login = (): React.ReactElement => {
  useDidShow(() => {
    // GetMoney().then(res => console.log('res', res))
  })

  // const userStore = useSelector<IState, IState>(state => ({ ...state }))
  // const dispatch: Dispatch<IAction> = useDispatch()
  const getUserInfo = res => {
    console.log('23')

    Taro.showToast({
      title: JSON.stringify(res),
      icon: 'success',
      duration: 2000,
    })
  }

  return (
    <Page className={styles.login}>
      <Image
        src="https://s.freshtxp.com/guide/undefined/2020-12-04/9122e0d7f2794dd6bce1393f0b9f7343.png"
        className={styles.icon}
        mode="widthFix"
      />
      <Button
        type="primary"
        className={styles.loginButton}
        width={686}
        height={92}
        openType="getUserInfo"
        onGetUserInfo={getUserInfo}
        onClick={() => console.log(111)}
      >
        微信登录
      </Button>
      <Button className={styles.partnerLoginButton} width={684} height={90}>
        已有合伙人账号登录
      </Button>
      <View className={styles.agreement}>
        <Text>登录表示同意 </Text>
        <Text className={styles.rule}>天鲜配生鲜平台代理合作协议</Text>
      </View>
    </Page>
  )
}

export default React.memo(Login)
