/* eslint-disable react/display-name */
import React, { useCallback, useState, useMemo } from 'react'
import { Image, BaseEventOrig, View } from '@tarojs/components'
import { ImageProps } from '@tarojs/components/types/Image'
import Loading from '@/components/Loading'
import { filterNullParams, thumpImg, transUnit } from '@/utils/index'

interface IProps extends ImageProps {
  showThumb?: boolean
  thumbWidth?: number
  width?: string | number
  height?: string | number
  mayHeight?: string | number
  loading?: boolean
  top?: number
}

const displayStyle: React.CSSProperties = {
  position: 'fixed',
  zIndex: -1,
  visibility: 'hidden',
  height: 'auto',
}

/**
 * 更友好的展示图片
 * @param width 图片宽度
 * @param height 图片高度
 * @param showThumb 展示过度的压缩图片 默认 true - 展示
 * @param thumbWidth 压缩图片宽度 默认50
 * @param mayHeight 占位近似高度，防止图片未加载前高度坍塌
 * @param loading 加载动画 默认true - 显示
 * @param top marginTop，偷懒属性
 */
const TImage = (props: IProps): React.ReactElement => {
  const { showThumb = true, loading = true } = props
  const [url, setUrl] = useState(showThumb ? thumpImg(props.src, props.thumbWidth || 50) : props.src)
  const [isPre, setIsPre] = useState(true)
  console.log('ImgLoaded')
  const imgLoaded = useCallback(() => {
    setIsPre(false)
    setUrl(props.src)
  }, [props.src])

  const imgError = useCallback((err: BaseEventOrig<ImageProps.onErrorEventDetail>) => {
    console.error(err)
  }, [])

  const PreLoadImg = useMemo(() => {
    return () =>
      showThumb ? <Image src={props.src} style={displayStyle} onLoad={imgLoaded} onError={imgError} /> : null
  }, [imgError, imgLoaded, props.src, showThumb])

  return (
    <>
      {/* 加载前的loading */}
      {isPre && (
        <View
          style={{
            ...(props.style as React.CSSProperties),
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: props.width && transUnit(props.width),
            height: (props.mayHeight || props.height) && transUnit(props.mayHeight || props.height),
            marginTop: props.top && transUnit(props.top),
          }}
          className={props.className}
        >
          {loading && <Loading />}
        </View>
      )}

      <Image
        {...props}
        style={filterNullParams({
          marginTop: props.top && transUnit(props.top),
          ...(props.style as React.CSSProperties),
          width: props.width && transUnit(props.width),
          height: props.height ? transUnit(props.height) : 'auto',
          ...(isPre ? displayStyle : {}),
        })}
        // lazyLoad
        src={url}
        onLoad={() => setIsPre(false)}
      />

      {/* 加载原图的工具人 */}
      <PreLoadImg />
    </>
  )
}

export default React.memo(TImage)
