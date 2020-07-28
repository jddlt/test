import Taro from '@tarojs/taro'
import { GetToken } from '@/network/api'
import { BASE_URL } from './../const'

export const request = (options: Taro.request.Option) => {
  const { url, method } = options
  return new Promise((resolve, reject) => {
    Taro.request({
      ...options,
      method: method || 'GET',
      url: `${BASE_URL}${url}`,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        UserType: 'wechatOnlinePartner',
        'Txp-WeChart-App': 'FreshTxpOlinePartner',
        'Txp-Token': GetToken() || '',
        ...options.header,
      },
      success: (res) => {
        if (res.data?.succ) {
          resolve(res)
        } else {
          Taro.showToast({ icon: 'none', title: res.data.msg || '请求出错啦！' })
          reject(res)
        }
      },
      fail: (msg) => Taro.showToast({ icon: 'none', title: JSON.stringify(msg) }),
    })
  })
}

export default {
  request,
}
