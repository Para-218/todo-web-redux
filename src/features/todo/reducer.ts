import { createAction, createReducer } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import FAKE_DATA from './fakedata'

export interface TodoItem {
  completed: boolean
  date: string
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
  total: FAKE_DATA.length
}
// action
export const addTodo = createAction('todo/addTodo', function prepare(message: string, date: Date) {
  const obj = <TodoItem>{ date: date.toLocaleDateString(), title: message, completed: false }
  return {
    payload: obj
  }
})
export const deleteTodo = createAction<number>('todo/deleteTodo')

export const editTodo = createAction(
  'todo/editTodo',
  function prepare(message: string, date: Date, completed: boolean, index: number) {
    const obj = <TodoItem>{ date: date.toLocaleDateString(), title: message, completed: completed }
    return {
      payload: {
        value: obj,
        index: index
      }
    }
  }
)
// reducer
export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.items.push(action.payload)
      state.total += 1
    })
    .addCase(deleteTodo, (state, action) => {
      state.items.splice(action.payload, 1)
      state.total -= 1
    })
    .addCase(editTodo, (state, action) => {
      state.items.push(action.payload.value)
      state.items.splice(action.payload.index, 1)
    })
    .addDefaultCase((state, action) => {
      console.log(state.status, action.type)
    })
})

export const selectItems = (state: RootState) => state.todos.items
