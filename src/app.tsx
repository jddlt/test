import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Taro from '@tarojs/taro'
import store from '@/store/index'
import 'taro-ui/dist/style/index.scss'
import './app.less'

interface IProps {
  children: React.ReactNode
}

class App extends Component<IProps> {
  componentDidMount(): void {
    console.log('23333')

    Taro.loadFontFace({
      family: 'Bitstream Vera Serif Bold',
      source: 'url("https://sungd.github.io/Pacifico.ttf")',
      success: console.log,
      fail: console.log,
    })
  }
  // this.props.children 是将要会渲染的页面
  render(): React.ReactNode {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
