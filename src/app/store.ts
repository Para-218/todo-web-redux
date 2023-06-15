/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/named */
import createSagaMiddleware from '@redux-saga/core'
import { Action, legacy_createStore as createStore, ThunkAction, configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import reducer, { initialState } from '../features/todo/reducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

//export const store = createStore(reducer, initialState)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
