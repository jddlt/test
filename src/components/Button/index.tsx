import React from 'react'
import { Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { ButtonProps } from '@tarojs/components/types/Button'

interface IProps extends ButtonProps {
  children: React.ReactNode
  width?: number
  height?: number
}
/**
 * 懒人Button
 * 1. 快捷写入 `width` 与 `height`
 */

const TButton = (props: IProps): React.ReactElement => {
  return (
    <Button
      {...props}
      hoverClass={props.hoverClass || 'defaultButtonHoverClass'}
      style={{
        ...(props.style as React.CSSProperties),
        width: props.width && Taro.pxTransform(props.width),
        height: props.height && Taro.pxTransform(props.height),
      }}
    >
      {props.children}
    </Button>
  )
}

export default TButton

/**  CSS  */
