import { RootState } from '../../app/store'
import FAKE_DATA from './fakedata'
import types from './type'

export interface TodoItem {
  completed: boolean
  date: Date
  title: string
}

export interface TodoState {
  items: TodoItem[]
  status: 'idle' | 'loading' | 'failed'
  total: number
}
// initial state
export const initialState: TodoState = {
  items: FAKE_DATA,
  status: 'idle',
  total: 0
}
// reducer
const reducer = (state = initialState, action: { type: string; message: TodoItem; index: number }) => {
  const newState = { ...state }
  switch (action.type) {
    case types.ADD_TODO:
      newState.items.push(action.message)
      newState.total += 1
      return newState
    case types.REMOVE_TODO:
      newState.items.splice(action.index, 1)
      newState.total -= 1
      return newState
    case types.UPDATE_TODO:
      newState.items.splice(action.index, 1)
      newState.items.push(action.message)
      return newState
    default:
      return newState
  }
}

export const selectItems = (state: RootState) => state.items

export default reducer
