import React, { useCallback } from 'react'
import Page from '@/components/Page'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import TImage from '@/components/Image'
import TButton from '@/components/Button'
import styles from './index.module.less'

const Result = (): React.ReactElement => {
  const goToHomePage = useCallback((): void => {
    Taro.reLaunch({ url: '/pages/index/index' })
  }, [])
  const goToApplyGroupPage = useCallback((): void => {
    Taro.reLaunch({ url: '/pages/applyGroup/index' })
  }, [])
  return (
    <Page className={styles.result}>
      <TImage
        src="https://freshtxp-static.oss-cn-beijing.aliyuncs.com/attachment/fb8b3b64-c582-48da-8b28-6fd3b21d2e29.png"
        mode="widthFix"
        width={140}
        height={140}
        showThumb={false}
        loading={false}
        top={95}
      />
      <View className={styles.notGroup}>您还不是天鲜配团长</View>
      <View className={styles.joinMe}>快申请加入我们吧~</View>
      <TButton type="primary" width={480} height={92} className={styles.applyGroup} onClick={goToApplyGroupPage}>
        申请团长
      </TButton>
      <TButton width={478} height={90} className={styles.goHome} onClick={goToHomePage}>
        去首页逛逛
      </TButton>
    </Page>
  )
}

export default React.memo(Result)
