/*
Nơi chứa các effect sẽ chạy đầu chương trình
*/
import { all } from 'redux-saga/effects'
import counterSaga from '../features/counter/counterSaga'
import todoSaga from '../features/todo/todoSaga'

export default function* rootSaga() {
  console.log('Hello. This is message from rootSaga. Just let you know it is working fine.')
  yield all([counterSaga(), todoSaga()])
}
