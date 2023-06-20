/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/named */
import { AnyAction, createAction, createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    incrementSaga: (state, action: PayloadAction<number>) => {
      state.status = 'loading'
    },
    incrementSagaSuccess: (state, action: PayloadAction<number>) => {
      state.status = 'idle'
      state.value += action.payload
    },
    incrementSagaFail: (state, action: PayloadAction<number>) => {
      state.status = 'failed'
      console.log('failed')
    }
  }
})

export const { increment, decrement, incrementByAmount, incrementSaga, incrementSagaSuccess, incrementSagaFail } =
  counterSlice.actions

export const selectCount = (state: RootState) => state.counters.value

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount))
    }
  }

export default counterSlice.reducer

const Increment = createAction('counter/increment')
const Decrement = createAction('counter/decrement')
const IncrementByAmount = createAction<number>('counter/incrementByAmount')

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Increment, (state) => {
      state.value += 1
    })
    .addCase(Decrement, (state) => {
      state.value -= 1
    })
    .addCase(IncrementByAmount, (state, action) => {
      state.value += action.payload
    })
    .addDefaultCase((state, action) => {
      console.log(state.value, action.type)
    })
})
