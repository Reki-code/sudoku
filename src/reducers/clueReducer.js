import { createSlice } from '@reduxjs/toolkit'
import { getSudoku } from 'sudoku-gen'

const initialState = {
  givens: null,
  puzzle: new Array(9).fill(new Array(9).fill(' ')),
  solution: new Array(9).fill(new Array(9).fill(' ')),
  curCell: { x: -1, y: -1 },
}

const copyStringToArray = (str, array) => {
  str.split('')
    .map((ch) => (ch === '-' ? ' ' : ch))
    .forEach((ch, idx) => {
      const boxIdx = Math.floor(idx / 9)
      array[boxIdx][idx % 9] = ch
    })
}

const clueSlice = createSlice({
  name: 'clue',
  initialState,
  reducers: {
    newGame(state) {
      const sudoku = getSudoku('easy')
      copyStringToArray(sudoku.puzzle, state.puzzle)
      state.givens = state.puzzle.map((arr) => arr.slice())
      copyStringToArray(sudoku.solution, state.solution)
    },
    activeCell(state, action) {
      state.curCell.x = 4
      state.curCell.y = action.y
    },
  },
})

export const { newGame, activeCell } = clueSlice.actions
export default clueSlice.reducer
