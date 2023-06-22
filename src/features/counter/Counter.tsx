/* eslint-disable import/named */
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { RootState, store } from '../../app/store'
import styles from './Counter.module.css'
import { decrement, increment, incrementByAmount, incrementIfOdd, incrementSaga, selectCount } from './counterSlice'

export function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')
  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} aria-label='Increment value' onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button className={styles.asyncButton} onClick={() => dispatch(incrementSaga(incrementValue))}>
          Add Async Saga
        </button>
        <button className={styles.button} onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </div>
    </div>
  )
}

// function HandleDecrement() {
//   const dispatch = useAppDispatch()
//   dispatch(decrement())
// }
//
// function HandleIncrement() {
//   const dispatch = useAppDispatch()
//   dispatch(increment())
// }
//
// function HandleIncrementByAmount(incrementAmount: number) {
//   const dispatch = useAppDispatch()
//   dispatch(incrementByAmount(incrementAmount))
// }
//
// function HandleIncrementSaga(incrementAmount: number) {
//   const dispatch = useAppDispatch()
//   dispatch(incrementSaga(incrementAmount))
// }

function HandleIncrementIfOdd(incrementAmount: number) {
  const dispatch = useAppDispatch()
  dispatch(incrementIfOdd(incrementAmount))
}

export class CounterClass extends React.Component<
  {
    counter: number
    increment: () => void
    decrement: () => void
    incrementByAmount: (...arg0: number[]) => void
    incrementSaga: (...arg0: number[]) => void
  },
  { incrementAmount: number; count: number }
> {
  constructor(props: {
    counter: number
    increment: () => void
    decrement: () => void
    incrementByAmount: (...arg0: number[]) => void
    incrementSaga: (...arg0: number[]) => void
  }) {
    super(props)
    this.state = { incrementAmount: 2, count: Number(this.props.counter) }
  }

  static getDerivedStateFromProps(
    prevProps: Readonly<{
      counter: number
      increment: () => void
      decrement: () => void
      incrementByAmount: (...arg0: number[]) => void
      incrementSaga: (...arg0: number[]) => void
    }>,
    prevState: Readonly<{ incrementAmount: number; count: number }>
  ): Readonly<{ incrementAmount: number; count: number }> {
    return { ...prevState, count: selectCount(store.getState()) }
  }

  render(): React.ReactNode {
    return (
      <div>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label='Decrement value'
            onClick={() => {
              this.props.decrement()
              this.setState({ ...this.state, count: selectCount(store.getState()) })
            }}
          >
            -
          </button>
          <span className={styles.value}>{this.state.count}</span>
          <button
            className={styles.button}
            aria-label='Increment value'
            onClick={() => {
              this.props.increment()
              //this.setState({ ...this.state, count: selectCount(store.getState()) })
            }}
          >
            +
          </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label='Set increment amount'
            value={this.state.incrementAmount}
            onChange={(e) => this.setState({ ...this.state, incrementAmount: Number(e.target.value) })}
          />
          <button
            className={styles.button}
            onClick={() => {
              this.props.incrementByAmount(this.state.incrementAmount)
              this.setState({ ...this.state, count: selectCount(store.getState()) })
            }}
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => {
              this.props.incrementSaga(this.state.incrementAmount)
              this.setState({ ...this.state, count: selectCount(store.getState()) })
            }}
          >
            Add Async Saga
          </button>
          <button className={styles.button} onClick={() => HandleIncrementIfOdd(this.state.incrementAmount)}>
            Add If Odd
          </button>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (state: RootState) => ({ counter: state.counters.value })

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
    incrementByAmount: (incrementAmount: number) => dispatch(incrementByAmount(incrementAmount)),
    incrementSaga: (incrementAmount: number) => dispatch(incrementSaga(incrementAmount))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(CounterClass)
