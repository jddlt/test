import React from 'react'
import { useDidShow } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import { GetMoney } from '@/network/api'
import { useSelector, useDispatch } from 'react-redux'
import { View } from '@tarojs/components'
import { IState, IAction } from '@/store/types'

type Dispatch<T> = (action: T) => void

const Login = (): React.ReactElement => {
  useDidShow(() => {
    GetMoney().then(res => console.log('res', res))
  })

  const userStore = useSelector<IState, IState>(state => ({ ...state }))

  const dispatch: Dispatch<IAction> = useDispatch()
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
        }
      >
        加1
      </AtButton>
      <AtButton
        type="primary"
        onClick={() =>
          dispatch({
            type: 'Decrement',
          })
        }
      >
        减2
      </AtButton>
      <AtButton
        type="primary"
        onClick={() =>
          dispatch({
            type: 'Rename',
            payload: '大王',
          })
        }
      >
        Rename
      </AtButton>
    </View>
  )
}

export default React.memo(Login)
