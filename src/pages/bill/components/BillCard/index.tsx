import React from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.less'

interface BillCardProps {
  style: React.CSSProperties
}

/**
 * imgCook生成的!!
 */
const BillCard = (props: BillCardProps) => {
  return (
    <View className={`${styles.mod} ${styles.animate}`} style={props.style}>
      <View className={styles.box}>
        <View className={styles.bd}>
          <View className={styles.wrap}>
            <View className={styles.type}></View>
          </View>
          <View className={styles.block}>
            <Text className={styles.title}>配送上门佣金</Text>
            <Text className={styles.word}>收入</Text>
          </View>
          <Text className={styles.count}>+5.21</Text>
        </View>
        <Text className={styles.txt}>10-14 09:00</Text>
        <View className={styles.ft} />
      </View>
    </View>
  )
}

export default React.memo(BillCard)
