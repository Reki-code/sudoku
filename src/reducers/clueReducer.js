import { createSlice } from '@reduxjs/toolkit'
import { getSudoku } from 'sudoku-gen'

const initialState = {
  puzzle: new Array(9).fill(new Array(9).fill(' ')),
  solution: new Array(9).fill(new Array(9).fill(' ')),
}

const clueSlice = createSlice({
  name: 'clue',
  initialState,
  reducers: {
    newGame(state) {
      const sudoku = getSudoku('easy')
      sudoku.puzzle.split('')
        .map((ch) => (ch === '-' ? ' ' : ch))
        .forEach((ch, idx) => {
          const boxIdx = Math.floor(idx / 9)
          state.puzzle[boxIdx][idx % 9] = ch
        })
    },
  },
})

export const { newGame } = clueSlice.actions
export default clueSlice.reducer
