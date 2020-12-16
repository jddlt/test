import React, { useState } from 'react'
import Page from '@/components/Page'
import { View, Input } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import DeliveryCard from '@/components/DeliveryCard'
import styles from './index.module.less'

const Result = (): React.ReactElement => {
  const [inputVal, setInputVal] = useState<string>('')
  return (
    <Page className={styles.delivery}>
      <View className={styles.input}>
        <AtSearchBar
          customStyle={{ width: '100%' }}
          showActionButton
          value={inputVal}
          actionName="查询"
          onChange={() => console.log('搜索')}
        />
      </View>
      <View className={styles.pickerContainer}></View>
      {new Array(10).fill(null).map((_, i) => (
        <DeliveryCard animate key={i} className={styles.boxS} style={{ animationDelay: `${0.1 * i}s` }} />
      ))}
    </Page>
  )
}

export default React.memo(Result)
