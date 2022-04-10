import { createSlice } from '@reduxjs/toolkit'
import { getSudoku } from 'sudoku-gen'

const initialState = {
  puzzle: new Array(9).fill(new Array(9).fill({
    given: false,
    value: ' ',
    color: 'blank',
    solution: ' ',
  })),
  curCell: { boxIdx: -1, cellIdx: -1 },
}

const clueSlice = createSlice({
  name: 'clue',
  initialState,
  reducers: {
    newGame(state) {
      const sudoku = getSudoku('easy')
      sudoku.puzzle.split('')
        .forEach((value, idx) => {
          const boxIdx = Math.floor(idx / 9)
          if (value !== '-') {
            state.puzzle[boxIdx][idx % 9].given = true
            state.puzzle[boxIdx][idx % 9].value = value
          } else {
            state.puzzle[boxIdx][idx % 9].given = false
            state.puzzle[boxIdx][idx % 9].value = ' '
          }
          state.puzzle[boxIdx][idx % 9].color = 'blank'
          state.puzzle[boxIdx][idx % 9].solution = sudoku.solution[idx]
        })
    },
    activeCell(state, action) {
      state.curCell = action.payload
      const { boxIdx, cellIdx } = action.payload
      if (!state.puzzle[boxIdx][cellIdx].given) {
        state.puzzle[boxIdx][cellIdx].color = 'active'
      }
    },
  },
})

export const { newGame, activeCell } = clueSlice.actions
export default clueSlice.reducer
