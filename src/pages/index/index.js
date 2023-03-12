import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  // config = {
  //   navigationBarTitleText: '首页'
  // }
  state = {
    loading: true,
    threads: []
  }
  onReady () {
    console.log('onReady');
  }
  handleNavigate = () => {
    console.log('点击')
    //路由跳转
    Taro.navigateTo({
      url: '/pages/home/home'
    })
  }
  render () {
    const {loading, threads} = this.state
    return (
      <View className='index'>
        <Text>Hello Taro!</Text>
        <Text onClick={this.handleNavigate}>Click Me!</Text>
      </View>
    )
  }
}
