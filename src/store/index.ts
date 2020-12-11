import { createStore, combineReducers } from 'redux'
import UserInfo from '@/store/reducer/userInfo'

const store = createStore(
  combineReducers({
    UserInfo,
  })
)

export default store
