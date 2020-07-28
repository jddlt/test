import React from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import { GetMoney } from '@/network/api'
import { useSelector, useDispatch } from 'react-redux'
import { View } from '@tarojs/components'
import { IState, IAction } from '@/store/types'

const Login = (): React.ReactElement => {
  useDidShow(() => {
    GetMoney().then((res) => console.log('res', res))
  })

  const userStore = useSelector<IState, IState>(
    (state) => ({ ...state })
  )
  const dispatch = useDispatch()
  return (
    <View>
      <View>
        {userStore.age}: {userStore.name}
      </View>
      <AtButton
        type="primary"
        onClick={() =>
          dispatch({
            type: 'Imcrement',
            payload: 1,
          })
        }>
        加1
      </AtButton>
      <AtButton
        type="primary"
        onClick={() =>
          dispatch({
            type: 'Decrement',
            payload: 2,
          })
        }>
        减2
      </AtButton>
      <AtButton
        type="primary"
        onClick={() =>
          dispatch({
            type: 'Rename',
            payload: '大王',
          })
        }>
        Rename
      </AtButton>
    </View>
  )
}

export default Login
