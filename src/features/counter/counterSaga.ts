/* eslint-disable import/named */
import { takeEvery, put, delay } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { incrementSagaSuccess, incrementSaga } from './counterSlice'

function* handleIncrement(action: PayloadAction<number>) {
  yield delay(1000)
  yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
  console.log('Message from counterSaga called by rootSaga.')
  fetch('https://jsonplaceholder.typicode.com/todos?userId=1&id=1')
    .then((response) => response.json())
    .then((json) => console.log(json))

  yield takeEvery(incrementSaga.toString(), handleIncrement)
}
