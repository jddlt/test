import React from 'react'
import { View } from '@tarojs/components'
import { styled } from 'linaria/react'

const Loading: React.FC = () => {
  return <CSSLoading />
}

export default React.memo(Loading)

const CSSLoading = styled(View)`
  width: 60px;
  height: 60px;
  background-color: #67cf22;
  display: inline-block;
  animation: rotateplane 1.2s infinite ease-in-out;
  @-webkit-keyframes rotateplane {
    0% {
      -webkit-transform: perspective(120px);
    }
    50% {
      -webkit-transform: perspective(120px) rotateY(180deg);
    }
    100% {
      -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
    }
  }
  @keyframes rotateplane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
`
