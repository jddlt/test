export interface IAction<T> {
  type: string
  payload?: T
}

export interface IUserInfo {
  nickName: string
  avatarUrl: string
  gender: 0 | 1 | 2
  country: string
  province: string
  city: string
  language?: 'en' | 'zh_CN' | 'zh_TW'
}

export interface IState {
  UserInfo
}
