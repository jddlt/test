import React from 'react'
import Taro from '@tarojs/taro'
import { Component } from 'react'
import { Provider } from 'react-redux'
import store from '@/store/index'
import 'taro-ui/dist/style/index.scss'
import './app.less' 

class App extends Component {

  // this.props.children 是将要会渲染的页面
  render () {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App

