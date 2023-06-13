/* eslint-disable import/named */
import { takeEvery, put, delay } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { incrementSagaSuccess, incrementSaga } from './counterSlice'

function* handleIncrement(action: PayloadAction<number>) {
  yield delay(2000)
  console.log('You have been waited for 2s')

  yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
  console.log('Message from counterSaga')

  yield takeEvery(incrementSaga.toString(), handleIncrement)
}
