import Taro from '@tarojs/taro'
import React from 'react'
import { View, Image } from '@tarojs/components'
import { useSelector, useDispatch } from 'react-redux'
import { IState, IUserInfo } from '@/store/index.d'
import Page from '@/components/Page'
import { setUserInfoAction, cleanUserInfoAction } from '@/store/action/userInfo'
import InputText, { InputTextProps } from './components/InputText'
import styles from './index.module.less'

const inputTextList: Partial<InputTextProps>[] = [
  {
    empty: true,
  },
  {
    leftIcon: 'credit-card',
    leftText: '余额',
    rightText: '320.00',
    postText: '元',
    rightStatus: '可提现',
  },
  {
    leftIcon: 'numbered-list',
    leftText: '账单',
    rightText: '127.00',
    postText: '元',
    rightStatus: '本月新增收益',
  },
  {
    empty: true,
  },
  {
    leftIcon: 'share',
    leftText: '个人推广码',
    rightText: '3',
    postText: '人',
    rightStatus: '本月获客数',
  },
  {
    leftIcon: 'lock',
    leftText: '拥金规则',
    preText: '奖励',
    rightText: '5.00',
    postText: '元',
    rightStatus: '每完成一次配送',
  },
  {
    leftIcon: 'bookmark',
    leftText: '自提点管理',
    rightText: '1',
    postText: '个',
    rightStatus: '我的自提点',
  },
  {
    empty: true,
  },
  {
    leftIcon: 'money',
    leftText: '邀好友成为合伙人',
    rightText: '21',
    postText: '人',
    rightStatus: '已邀请',
  },
  {
    empty: true,
  },
]

const Home = (): React.ReactElement => {
  const UserInfo: IUserInfo = useSelector((state: IState) => state.UserInfo)
  const dispatch = useDispatch()

  const setUserInfo = () => {
    if (UserInfo.nickName) {
      dispatch(cleanUserInfoAction())
    } else {
      Taro.getUserInfo({
        success: res => {
          dispatch(setUserInfoAction(res.userInfo))
        },
        fail: () => {
          Taro.navigateTo({
            url: '/pages/login/index',
          })
        },
      })
    }
  }

  const goToBill = () => {
    Taro.navigateTo({
      url: '/pages/bill/index',
    })
  }

  return (
    <Page className={styles.minePage}>
      <View className={styles.mine}>
        <Image
          src={
            UserInfo.avatarUrl ||
            'https://s.freshtxp.com/guide/undefined/2020-12-07/6d1d680214b54b998f972a6e4dd12845.png'
          }
          className={styles.avatar}
        />
        <View className={styles.name}>{UserInfo.nickName || '游客'}</View>
        <View className={styles.loginStatus} onClick={setUserInfo}>
          {UserInfo.nickName ? '退出登录' : '点击登录'} &gt;
        </View>
      </View>
      {inputTextList.map((v, index) => (
        <InputText onClick={goToBill} {...v} key={index} />
      ))}
    </Page>
  )
}

export default React.memo(Home)
