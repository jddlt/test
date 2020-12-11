import { SET_USERINFO, CLEAN_USERINFO } from '@/store/actionTypes'
import { IAction, IUserInfo } from '@/store/index.d'

/**
 * 设置用户信息
 * @param {IUserInfo} payload
 */
export const setUserInfoAction = (payload: IUserInfo): IAction<IUserInfo> => {
  return {
    type: SET_USERINFO,
    payload,
  }
}

/**
 * 清除用户信息
 */
export const cleanUserInfoAction = (): IAction<IUserInfo> => {
  return {
    type: CLEAN_USERINFO,
  }
}
