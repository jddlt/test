import React, { useState, useCallback, useMemo, useEffect } from 'react'
import Taro from '@tarojs/taro'
import Page from '@/components/Page'
import { View, Map } from '@tarojs/components'
import { MapProps } from '@tarojs/components/types/Map'
import { AtSearchBar } from 'taro-ui'
import marker from '@/assets/image/marker.png'
import DeliveryCard from '@/components/DeliveryCard'
import styles from './index.module.less'

const displayStyle: React.CSSProperties = {
  transform: 'translateY(100%)',
}

// 气泡框 - 简单时无用
// eslint-disable-next-line
const commonConf: MapProps.callout = {
  content: '',
  fontSize: 14,
  color: '#333',
  display: 'BYCLICK',
  borderWidth: 1,
  borderColor: '#eee',
  borderRadius: 5,
  bgColor: '#fff',
  anchorX: 0,
  anchorY: -3,
  padding: 10,
  textAlign: 'center',
}

let markers: MapProps.marker[] = [
  {
    longitude: 121.491268,
    latitude: 31.202009,
    iconPath: marker,
    id: 1,
    title: '虹桥火车站',
  },
  {
    longitude: 121.471192,
    latitude: 31.235983,
    iconPath: marker,
    id: 2,
    title: '衢州',
  },
  {
    longitude: 121.4912,
    latitude: 31.230108,
    iconPath: marker,
    id: 10,
    title: '上饶师范',
  },
  {
    longitude: 121.4912,
    latitude: 31.230108,
    iconPath: marker,
    id: 11,
    title: '上饶师范2',
  },
  {
    longitude: 121.4912,
    latitude: 31.230108,
    iconPath: marker,
    id: 12,
    title: '上饶师范3',
  },
  {
    longitude: 121.478304,
    latitude: 31.194743,
    iconPath: marker,
    id: 6,
    title: '虹桥总部1号',
  },
  {
    longitude: 121.481613,
    latitude: 31.226758,
    iconPath: marker,
    id: 5,
    title: '梅院一居',
  },
]

const width = 38

markers = markers.map(v => ({
  ...v,
  joinCluster: true,
  width: Taro.pxTransform(width),
  height: Taro.pxTransform(width * 1.4),
}))

const Login = (): React.ReactElement => {
  const [val, setVal] = useState<string>('')
  const [hiddenCard, setHiddenCard] = useState(false)

  const handleInputChange = useCallback(e => {
    setVal(e)
  }, [])
  const mapCtx = useMemo(() => wx.createMapContext('myMap'), [])
  const includesPoints = useCallback(
    () =>
      mapCtx.includePoints({
        points: markers.map(v => ({ longitude: v.longitude, latitude: v.latitude })),
        padding: [80],
        success: res => console.log('res', res),
      }),
    [mapCtx]
  )

  useEffect(() => {
    console.log('执行一次')
    // mapCtx.addMarkers({ markers: markers, success: res => console.log('addMarkers', res) })
    setTimeout(() => {
      includesPoints()
      mapCtx.initMarkerCluster()
    }, 1500)
  }, [includesPoints])
  return (
    <Page className={styles.map}>
      <View className={styles.input}>
        <AtSearchBar
          customStyle={{ width: '100%' }}
          showActionButton
          value={val}
          onChange={handleInputChange}
          actionName="查询"
          onActionClick={includesPoints}
        />
      </View>
      <View
        className={styles.mapContainer}
        style={{
          height: `calc(100vh - ${Taro.pxTransform(128 + (hiddenCard ? 0 : 330 + 2 * 58))})`,
          transition: 'height .4s',
        }}
      >
        <Map
          id="myMap"
          style={{ width: '100%', height: '100%' }}
          longitude={121.478304}
          latitude={31.194743}
          markers={markers}
          onUpdated={() => console.log('update')}
          onMarkerTap={e => {
            console.log('markerTap', e.detail.markerId)
            setHiddenCard(false)
          }}
        />
      </View>
      {/* <TImage
        src="https://freshtxp-static.oss-cn-beijing.aliyuncs.com/attachment/7ed39ec3-533f-46f9-b415-67f839d86e29.png"
        width="100%"
        mode="widthFix"
        height={460}
        className={styles.deliveryCard}
      /> */}
      <DeliveryCard
        className={styles.deliveryCard}
        style={hiddenCard ? displayStyle : {}}
        onClose={() => setHiddenCard(true)}
      />
    </Page>
  )
}

export default React.memo(Login)
