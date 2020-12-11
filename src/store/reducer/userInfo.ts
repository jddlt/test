import { Reducer } from 'redux'
import { IAction, IUserInfo } from '@/store/index.d.ts'
import { SET_USERINFO, CLEAN_USERINFO } from '@/store/actionTypes'

const InitState = {} as IUserInfo

export const userInfoReducer: Reducer = (state: IUserInfo = InitState, action: IAction<IUserInfo>) => {
  switch (action.type) {
    case SET_USERINFO:
      return { ...action.payload }
    case CLEAN_USERINFO:
      return {}
    default:
      return { ...state }
  }
}

export default userInfoReducer
