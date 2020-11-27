import Taro from '@tarojs/taro'
import { request } from '@/network/request'

export const GetToken = (): string => Taro.getStorageSync('TXP_ONLINE_PARTNER_TOKEN')

export const GetMoney = (): Promise<unknown> => request({ url: '/api/v1/partner/bonus/notApplyBonus' })

export default {
  GetToken,
  GetMoney,
}
