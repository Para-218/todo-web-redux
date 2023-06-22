/* eslint-disable import/named */
import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeEvery } from 'redux-saga/effects'
import { incrementSaga, incrementSagaFail, incrementSagaSuccess } from './counterSlice'
import { getJson } from './service'

function* handleIncrement(action: PayloadAction<number>) {
  try {
    if (action.payload === 3) throw 'Whoops!'
    yield put(incrementSagaSuccess(action.payload))
  } catch {
    yield put(incrementSagaFail(action.payload))
  }
}

export default function* counterSaga() {
  console.log('Message from counterSaga called by rootSaga.')
  getJson()
  yield takeEvery(incrementSaga.toString(), handleIncrement)
}
