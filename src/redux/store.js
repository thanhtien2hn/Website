import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../sides/counterSlice'

export const store = configureStore({
  reducer: { counter:counterReducer},
})