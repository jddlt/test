/* eslint-disable @typescript-eslint/indent */
import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { styled } from 'linaria/react'
import TImage from '@/components/Image'
import { IInfoList } from '@/const/index'

interface IProps extends IInfoList {
  index: number
}

const Card = (props: IProps): React.ReactElement => {
  const formatHot = (num: number) => (num > 10000 ? `${Math.floor(num / 10000)}万` : num)

  return (
    <InfoCard index={props.index} onClick={() => Taro.navigateTo({ url: '/pages/map/index' })}>
      <View className="info">
        <View>
          <Text className="index">{String(props.index + 1).padStart(2, '0')}</Text>
          <Text className="hot">{formatHot(props.hot)}热度</Text>
        </View>
        <View className="title es2">{props.title}</View>
      </View>
      {/* <Image src={props.img} className="img" /> */}
      <TImage src={props.img} width={200} height={120} className="img" />
    </InfoCard>
  )
}

export default Card

/**  CSS  */
const InfoCard = styled(View)<{ index: number }>`
  width: 100%;
  display: flex;
  background-color: #fff;
  padding: 24px 30px;
  box-sizing: border-box;
  justify-content: space-between;
  min-height: 200px;
  .info {
    width: calc(100% - 220px);
    View {
      .index {
        width: 60px;
        height: 40px;
        display: inline-block;
        font-size: 28px;
        letter-spacing: 1px;
        border-radius: 10px;
        text-align: center;
        line-height: 40px;
        color: ${((props: { index: number }) => (props.index > 2 ? '#f8b373' : '#fff')) as any};
        background: ${((props: { index: number }) =>
          props.index > 2 ? '#f9f9f5' : 'linear-gradient(to right, #f2b845, #f6cd56)') as any};
      }
      .hot {
        margin-left: 14px;
        font-size: 26px;
        color: #aaa;
      }
    }
    .title {
      margin-top: 10px;
      width: 100%;
      font-size: 30px;
      color: #000;
    }
  }
  .img {
    margin-top: 16px;
    width: 200px;
    height: 120px;
    border-radius: 14px;
  }
`
