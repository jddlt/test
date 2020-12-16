import React from 'react'
import { Button } from '@tarojs/components'
import { ButtonProps } from '@tarojs/components/types/Button'
import { transUnit } from '@/utils/index'

interface IProps extends ButtonProps {
  children: React.ReactNode
  width?: number | string
  height?: number | string
}
/**
 * 懒人Button
 * 1. 快捷写入 `width` 与 `height`
 */

const TButton = (props: IProps): React.ReactElement => {
  return (
    <Button
      {...props}
      className={props.className + (props.hoverClass ? '' : ' defaultButtonClass')}
      hoverClass={props.hoverClass || 'null'}
      style={{
        lineHeight: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...(props.style as React.CSSProperties),
        width: props.width && transUnit(props.width),
        height: props.height && transUnit(props.height),
      }}
    >
      {props.children}
    </Button>
  )
}

export default TButton

/**  CSS  */
