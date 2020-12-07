import React from 'react'
import { View } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'

interface IProps extends ViewProps {
  children?: React.ReactNode
}

/**
 * 所有页面引入该文件作为根节点
 * 便于后面全局功能扩展 如 loading 回首页 ..
 */
const Page = (props: IProps): React.ReactElement => {
  return <View {...props}></View>
}

export default Page
