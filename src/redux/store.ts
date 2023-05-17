import { configureStore } from '@reduxjs/toolkit'

import signUpSlice from './SignUser/signUpSlice'
import statusSlice from './SignUser/statusSlice'
import signInSlice from './SignUser/signInSlice'

export const store = configureStore({
  reducer: {
    signUpSlice,
    statusSlice,
    signInSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
