import React from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { Image } from '@tarojs/components'
import Page from '@/components/Page'
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

  const goLogin = () => {
    Taro.navigateTo({
      url: '/pages/login/index',
    })
  }

  return (
    <Page className={styles.home} onClick={goLogin}>
      <Image
        className={styles.img}
        mode="widthFix"
        src="https://s.freshtxp.com/guide/undefined/2020-12-04/d9efb80771be4d5dbeb8a24c966d1a45.png"
      />
    </Page>
  )
}

export default React.memo(Login)
