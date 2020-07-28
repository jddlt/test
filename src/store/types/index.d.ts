export interface IState {
  age: number
  name: string
}

export type IActionType = 'Imcrement' | 'Decrement'

interface IActionNumber {
  type: IActionType
  payload?: number
}

interface IActionString {
  type: 'Rename'
  payload: string
}

export type IAction = IActionNumber | IActionString
