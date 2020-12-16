import React, { useState } from 'react'
import Page from '@/components/Page'
import { View } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import Search from '@/components/Search'
import BillCard from './components/BillCard'
import styles from './index.module.less'

const Result = (): React.ReactElement => {
  const [val, setVal] = useState('')
  return (
    <Page className={styles.bill}>
      <View className={styles.search}>
        <Search placeholder="请输入订单内容" />
      </View>
      {/* <View className={styles.input}>
        <AtSearchBar
          customStyle={{ width: '100%' }}
          showActionButton
          value={val}
          onChange={() => {}}
          actionName="查询"
        />
      </View> */}
      {new Array(10).fill(null).map((_, i) => (
        <BillCard style={{ animationDelay: `${0.05 * i}s` }} key={i} />
      ))}
    </Page>
  )
}

export default React.memo(Result)
