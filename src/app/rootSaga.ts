import { all } from 'redux-saga/effects'
import counterSaga from '../features/counter/counterSaga'

function* demoSaga() {
  yield console.log('Demo Saga')
}

export default function* rootSaga() {
  console.log('Hello Saga')
  yield all([demoSaga(), counterSaga()])
}
