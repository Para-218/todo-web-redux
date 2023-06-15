/* eslint-disable import/named */
import { takeEvery, delay } from 'redux-saga/effects'
//import { writeFile } from 'fs'
//import { PayloadAction } from '@reduxjs/toolkit'

function* handleIncrement() {
  yield delay(1000)
  console.log('Congrat. You have been waited for 1s from file todoSaga.')
}

export default function* todoSaga() {
  yield console.log('Message from todoSaga called by rootSaga.')

  yield takeEvery('*', handleIncrement)
}
