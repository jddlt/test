import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '@/store/index'
import 'taro-ui/dist/style/index.scss'
import './app.less'

interface IProps {
  children: React.ReactNode
}

class App extends Component<IProps> {
  // this.props.children 是将要会渲染的页面
  render(): React.ReactNode {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
