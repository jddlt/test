import Taro from '@tarojs/taro'
import React, { useEffect, useState, useRef } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
// import {} from './'
import dayjs from 'dayjs'
import './index.less'
import { useImmer } from 'use-immer'

const Home = () => {
  const [people, setAge] = useImmer({
    age: 18,
    name: '小王'
  })

  useEffect(() => {
    console.log(`今年${people.age}岁了`);
  }, [people])
    return (
      <View className='index'>
        <View>{people.name}: {people.age}</View>
        <View>{dayjs().format('YYYYMMDD HH:mm:ss')}</View>
        <AtButton type='primary' circle={true} onClick={() => setAge(pre => { pre.age += 1 })}>years later</AtButton>
        <AtButton type='primary' circle customStyle={{marginTop: '10px'}} onClick={() => Taro.navigateTo({url: '/pages/login/index'})}>GoTo anOther</AtButton>
      </View>
    )
}

export default Home