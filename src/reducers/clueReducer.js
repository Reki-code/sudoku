import { createSlice } from '@reduxjs/toolkit'

const initialState = new Array(9).fill(new Array(9).fill(' '))

const clueSlice = createSlice({
  name: 'clue',
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    newGame(state, action) {
      // const sudoku = action.payload
      // eslint-disable-next-line no-param-reassign
      state[0][0] = '1'
    },
  },
})

export const { newGame } = clueSlice.actions
export default clueSlice.reducer
