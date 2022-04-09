import { createSlice } from '@reduxjs/toolkit'

const initialState = { row: -1, col: -1 }

const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
  },
})

export default gridSlice.reducer
