export interface IState {
  age: number
  name: string
}

export type IActionType = 'Imcrement' | 'Decrement' | 'Rename'

export interface IAction {
  type: IActionType
  payload?: number | string
}

export default {
  IState,
  IActionType,
  IAction,
}
