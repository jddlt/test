import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import TButton from '@/components/Button'
import styles from './index.module.less'

interface DeliveryCardProps {
  className?: string
  style?: React.CSSProperties
  onClose?: () => void
  animate?: boolean
}

const goodsList = [
  {
    goodsName: '每日鲜语鲜牛奶185ml',
    num: 3,
  },
  {
    goodsName: '北欧芝士风味酸奶',
    num: 5,
  },
]

const DeliveryCard = (props: DeliveryCardProps) => {
  return (
    <View
      className={`${styles.deliveryCard} ${props.className} ${props.animate ? styles.animate : ''}`}
      style={props.style || {}}
    >
      <View className={styles.cardTitle}>
        <Text className={styles.deliveryType}>送到柜</Text>
        <Text className={styles.arrivedTime}>
          请在
          <Text className={styles.time}> 6月1日前 </Text>
          送达
        </Text>
        <Text className={styles.colLine} />
        <Text className={styles.userName}>收货人 赵林刚</Text>
      </View>
      <View className={styles.deliveryAddress}>
        <View className={styles.address}>虹桥总部一号-上海市虹桥镇闵行区紫秀路100号</View>
        <View className={styles.distance}>
          <Text className={styles.distanceNum}>3.2</Text>
          <Text className={styles.distanceUnit}>km</Text>
        </View>
      </View>
      <View className={styles.line} />
      {goodsList.map(item => (
        <View className={styles.goods} key={item.goodsName}>
          <Text className={styles.goodsNum}>{item.num}瓶</Text>
          <Text>{item.goodsName}</Text>
        </View>
      ))}
      <View className={styles.footer}>
        <View className={styles.defaultBtn}>电话</View>
        <View className={styles.defaultBtn}>信息</View>
        <TButton
          style={{ margin: 0 }}
          type="primary"
          width="48%"
          height={92}
          onClick={() => Taro.navigateTo({ url: '/pages/map/index' })}
        >
          确认送达
        </TButton>
      </View>
      {props.onClose && (
        <AtIcon
          onClick={props.onClose}
          className={styles.closeIcon}
          value="chevron-down"
          size="24"
          color="#999"
        ></AtIcon>
      )}
    </View>
  )
}

export default React.memo(DeliveryCard)
