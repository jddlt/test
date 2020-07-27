import { createStore } from 'redux'
import { userInfoReducer } from './reducer/userInfoReducer'

const store = createStore(userInfoReducer)

export default store

