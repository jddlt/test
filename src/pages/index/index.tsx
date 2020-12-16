import React from 'react'
import Taro from '@tarojs/taro'
import TImage from '@/components/Image'
import Page from '@/components/Page'
import { IState, IUserInfo } from '@/store/index.d'
import { useSelector } from 'react-redux'
import styles from './index.module.less'

const Login = (): React.ReactElement => {
  const UserInfo: IUserInfo = useSelector((state: IState) => state.UserInfo)
  const goLogin = () => {
    if (UserInfo.nickName) {
      Taro.navigateTo({
        url: '/pages/result/index',
      })
    } else {
      Taro.navigateTo({
        url: '/pages/login/index',
      })
    }
  }

  return (
    <Page className={styles.home} onClick={goLogin} noLoading>
      <TImage
        className={styles.img}
        mode="widthFix"
        width="100%"
        mayHeight="813px"
        // showThumb={false}
        src="https://s.freshtxp.com/guide/undefined/2020-12-04/d9efb80771be4d5dbeb8a24c966d1a45.png"
      />
    </Page>
  )
}

export default React.memo(Login)
