/* eslint-disable */
import React from 'react'
import { Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { styled } from 'linaria/react'
import { ButtonProps } from '@tarojs/components/types/Button'

interface IProps extends ButtonProps {
  children: React.ReactNode
  width?: number
  height?: number
}

const TxpButton = (props: IProps): React.ReactElement => {
  return (
    <CssButton {...props} hoverClass="none">
      {props.children}
    </CssButton>
  )
}

export default TxpButton

/**  CSS  */
const CssButton = styled(Button)<IProps>`
  width: ${props => props.width && Taro.pxTransform(props.width)};
  height: ${props => props.height && Taro.pxTransform(props.height)};
  border-radius: ${props => props.height && Taro.pxTransform(props.height / 2)};
  line-height: ${props => props.height && Taro.pxTransform(props.height)};
  &.button-hover {
    background-color: ${props => TypeToBg(props.type)};
    color: ${props => TypeToColor(props.type)};
    transform: scale(0.96);
    transition: transform 0.2s;
  }
`
const TypeToBg = (type: string) => {
  switch (type) {
    case 'primary':
      return '#004c96'
    case 'primary':
      return '#d55048'
    default:
      return '#f8f8f8'
  }
}
const TypeToColor = (type: string) => {
  switch (type) {
    case 'primary':
    case 'warn':
      return '#fff'
    default:
      return '#004c96'
  }
}
