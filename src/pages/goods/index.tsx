import Taro from '@tarojs/taro'
import React, { useState, useCallback } from 'react'
import { View, Swiper, SwiperItem, Text, ScrollView } from '@tarojs/components'
import { HOT_TYPE, IHotType, INFO_LIST } from '@/const/index'
import Card from './components/Card'
import styles from './index.module.less'

const Home = (): React.ReactElement => {
  const [current, setCurrent] = useState(0)
  const [type, setType] = useState('')
  const activeStyle = useCallback(i => (i === current ? { color: '#000' } : { color: '#666' }), [current])
  const typeStyle = useCallback(
    t => (t === type ? { backgroundColor: '#eee', color: '#333' } : { backgroundColor: '#fff' }),
    [type]
  )
  return (
    <View className={styles.home}>
      <View className={styles.category}>
        <Text style={activeStyle(0)} onClick={() => setCurrent(0)}>
          热榜
        </Text>
        <Text style={activeStyle(1)} onClick={() => setCurrent(1)}>
          推荐
        </Text>
        <View
          style={{ transform: `translateX(${current === 0 ? Taro.pxTransform(-110) : Taro.pxTransform(110)})` }}
          className={styles.line}
        />
      </View>
      <ScrollView className={styles.scrollContainer} scrollIntoView={type} scrollX scrollWithAnimation enableFlex>
        {HOT_TYPE.map((item: IHotType) => (
          <View className={styles.scrollItem} id={item.value} key={item.title} onClick={() => setType(item.value)}>
            <Text style={typeStyle(item.value)}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
      <View className={styles.container}>
        <Swiper
          duration={300}
          current={current}
          onChange={e => setCurrent(e.detail?.current)}
          style={{ height: `calc(100vh - ${Taro.pxTransform(180)})`, overflowY: 'auto' }}
        >
          <SwiperItem className={styles.swiperItem}>
            {INFO_LIST.map((item, index) => (
              <Card key={item.title} {...item} index={index} />
            ))}
          </SwiperItem>
          <SwiperItem className={styles.swiperItem}>
            <View>2</View>
          </SwiperItem>
        </Swiper>
      </View>
    </View>
  )
}

export default React.memo(Home)
