import React from 'react'
import Page from '@/components/Page'
import styles from './index.module.less'

const Result = (): React.ReactElement => {
  return <Page className={styles.applyGroup}>申请</Page>
}

export default React.memo(Result)
