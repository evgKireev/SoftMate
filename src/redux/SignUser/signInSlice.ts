import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {}

const initialState: initialStateType = {}

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {},
})

// export const {} = signInSlice.actions
export default signInSlice.reducer
