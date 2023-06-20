/* eslint-disable import/named */
import createSagaMiddleware from '@redux-saga/core'
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../features/counter/counterSlice'
import { todoReducer } from '../features/todo/reducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    counters: counterReducer,
    todos: todoReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
