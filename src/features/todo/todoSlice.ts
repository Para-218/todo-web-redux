/* eslint-disable import/named */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { List } from 'reselect/es/types'
import { RootState, AppThunk } from '../../app/store'
import { fetchCount } from './todoAPI'

export interface TodoState {
  items: List
  status: 'idle' | 'loading' | 'failed'
  info: {
    total: number
  }
}

const initialState: TodoState = {
  items: [],
  status: 'idle',
  info: {
    total: 0
  }
}

export const incrementAsync = createAsyncThunk('todo/fetchCount', async (amount: number) => {
  const response = await fetchCount(amount)
  return response.data
})

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    incrementSaga: (state, action: PayloadAction<number>) => {
      state.status = 'loading'
    },
    incrementSagaSuccess: (state, action: PayloadAction<number>) => {
      state.status = 'idle'
      state.value += action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const { increment, decrement, incrementByAmount, incrementSaga, incrementSagaSuccess } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount))
    }
  }

export default counterSlice.reducer
