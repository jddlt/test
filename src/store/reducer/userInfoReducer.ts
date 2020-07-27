import { Reducer } from "redux";
import { IState, IAction } from '@/store/types';


const InitState = {
  age: 18,
  name: '张三'
}

export const userInfoReducer: Reducer = (state: IState = InitState, action: IAction ) => {
  switch (action.type) {
    case 'Imcrement':
      return {...state, age: state.age + (action.payload as number || 1)};
    case 'Decrement':
      return {...state, age: state.age - (action.payload as number || 1)};
    case 'Rename':
      return {...state, name: action.payload};
    default:
      return { ...state }
  }
}

export default {
  userInfoReducer
}
