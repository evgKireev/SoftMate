import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateSignUp = {}

const initialState: initialStateSignUp = {}

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},
})
// export const {} = signUpSlice.actions

export default signUpSlice.reducer
