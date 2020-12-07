import Taro from '@tarojs/taro'
import React, { useState } from 'react'
import { View, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import styles from './index.module.less'

type IUserInfo = Taro.UserInfo

const Home = (): React.ReactElement => {
  const [userInfo] = useState<IUserInfo>({} as IUserInfo)

  const login = () => {
    Taro.login({
      success(res) {
        if (res.code) {
          console.log(res)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      },
    })
  }

  // withCredentials 携带code获取
  // const getuserInfo = () => {
  //   Taro.getUserInfo({
  //     withCredentials: true,
  //     success: res => {
  //       console.log('res11', res)

  //       setUserInfo(res.userInfo)
  //     },
  //     fail: err => console.error(err),
  //   })
  // }

  const authorize = () => {
    Taro.getSetting({
      success: function (res) {
        if (!res.authSetting['scope.record']) {
          Taro.authorize({
            scope: 'scope.record',
            success: function () {
              // 用户已经同意小程序使用录音功能，后续调用 Taro.startRecord 接口不会弹窗询问
              Taro.startRecord()
            },
          })
        }
      },
    })
  }

  return (
    <View className={styles.home}>
      <AtButton type="primary" onClick={login}>
        Login
      </AtButton>
      {userInfo.nickName && (
        <View>
          <Image src={userInfo.avatarUrl} style={{ width: '80px', height: '80px' }} />
          name: {userInfo.nickName}
        </View>
      )}
      <AtButton type="primary" openType="getUserInfo">
        getUserInfo
      </AtButton>
      <AtButton type="primary" onClick={authorize}>
        授权
      </AtButton>
    </View>
  )
}

export default React.memo(Home)
