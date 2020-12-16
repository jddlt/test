import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import Loading from '@/components/Loading'

interface IProps extends ViewProps {
  children?: React.ReactNode
  noLoading?: boolean
}

let timer: null | NodeJS.Timeout = null

/**
 * 所有页面引入该文件作为根节点
 * 便于后面全局功能扩展 如 loading 回首页 ..
 */
const Page = (props: IProps): React.ReactElement => {
  const [loading, setLoading] = useState(!props.noLoading)
  useEffect(() => {
    timer = setTimeout(() => setLoading(false), 500)
    return () => {
      timer && clearTimeout(timer)
    }
  }, [])
  return (
    <View {...props} className={props.className + ' globalCss'}>
      {loading ? <PageLoading /> : props.children}
    </View>
  )
}

const PageLoading = React.memo(() => {
  return (
    <View
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loading />
    </View>
  )
})

export default React.memo(Page)
