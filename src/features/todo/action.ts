import { TodoItem } from './reducer'
import types from './type'

export function addTodo(message: string, date: Date) {
  const obj = <TodoItem>{ date: date, title: message, completed: false }
  return {
    type: types.ADD_TODO,
    message: obj,
    index: 0
  }
}

export function deleteTodo(index: number) {
  const obj = <TodoItem>{ date: new Date(), title: '', completed: false }
  return {
    type: types.REMOVE_TODO,
    message: obj,
    index: index
  }
}

export function editTodo(message: string, date: Date, completed: boolean, index: number) {
  const obj = <TodoItem>{ date: date, title: message, completed: completed }
  return {
    type: types.UPDATE_TODO,
    message: obj,
    index: index
  }
}
