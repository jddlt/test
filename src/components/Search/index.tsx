import React from 'react'
import { View, Input } from '@tarojs/components'
import { InputProps } from '@tarojs/components/types/Input'
import { AtIcon } from 'taro-ui'
import styles from './index.module.less'

type SearchProps = InputProps

const Search = (props: SearchProps): React.ReactElement => {
  return (
    <View className={styles.search}>
      <AtIcon value="search" size="16" color="#999" />
      <Input
        type="text"
        {...props}
        placeholder={props.placeholder || '请输入搜索内容'}
        className={`${styles.className} ${styles.input}`}
      />
    </View>
  )
}

export default React.memo(Search)
