import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {}

const initialState: initialStateType = {}

const statusSlice = createSlice({
  name: 'statusUser',
  initialState,
  reducers: {}
})

// export const {} = statusSlice.actions

export default statusSlice.reducer
