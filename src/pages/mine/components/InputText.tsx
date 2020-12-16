import React from 'react'
import { View, Text } from '@tarojs/components'
import { PRIMARY_COLOR } from '@/const/index'
import { AtIcon } from 'taro-ui'
import { styled } from 'linaria/react'

export interface InputTextProps {
  leftIcon: string
  leftIconColor?: string
  leftIconSize?: number
  leftText: string
  rightText: string
  preText?: string
  postText: string
  rightStatus: string
  empty?: boolean
  onClick?: () => void
}

const InputText = (props: Partial<InputTextProps>): React.ReactElement => {
  return props.empty ? (
    <Line />
  ) : (
    <CSSInputText onClick={props.onClick || (() => {})}>
      <View className="inputTextLeft">
        {props.leftIcon && (
          <AtIcon value={props.leftIcon} size={props.leftIconSize || 18} color={props.leftIconColor || PRIMARY_COLOR} />
        )}
        {props.leftText && <Text className="inputTextLeftFont">{props.leftText}</Text>}
      </View>
      <View className="inputTextRight">
        {props.rightText && (
          <Text className="inputTextRightMoney">
            {props.preText && <Text>{props.preText}</Text>}
            {props.rightText}
            {props.postText && <Text>{props.postText}</Text>}
          </Text>
        )}
        {props.rightStatus && <Text className="inputTextRightStatus">{props.rightStatus}</Text>}
      </View>
    </CSSInputText>
  )
}

export default InputText

/*  CSS  */
const Line = styled(View)`
  width: 100%;
  height: 12px;
  background-color: #ecedef;
`
const CSSInputText = styled(View)`
  width: 100%;
  height: 136px;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  &:active {
    background-color: #f5f5f5;
  }
  .inputTextLeft {
    font-size: 32px;
    color: #333;
    display: flex;
    align-items: center;
    .inputTextLeftFont {
      margin-left: 12px;
    }
  }
  .inputTextRight {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    Text.inputTextRightMoney {
      font-size: 36px;
      color: #333;
      font-weight: 500;
      Text:first-of-type {
        font-size: 24px;
        margin-right: 8px;
      }
      Text:last-of-type {
        font-size: 24px;
        margin-left: 8px;
      }
    }
    .inputTextRightStatus {
      font-size: 24px;
      color: #bbbbb8;
      margin-top: 6px;
    }
  }
`
