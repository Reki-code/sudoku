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

const clearColor = (puzzle) => {
  for (let b = 0; b < 9; b += 1) {
    for (let c = 0; c < 9; c += 1) {
      if (puzzle[b][c].given) {
        puzzle[b][c].color = 'given'
      } else {
        puzzle[b][c].color = 'blank'
      }
    }
  }
}

const validate = (puzzle, b, c) => {
  if (puzzle[b][c].value !== puzzle[b][c].solution) {
    puzzle[b][c].color = 'error'
  } else {
    puzzle[b][c].color = 'blank'
  }
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
          state.puzzle[boxIdx][idx % 9].solution = sudoku.solution[idx]
        })
      clearColor(state.puzzle)
      state.curCell.boxIdx = -1
      state.curCell.cellIdx = -1
    },
    activeCell(state, action) {
      state.curCell = action.payload
      const { boxIdx, cellIdx } = action.payload
      clearColor(state.puzzle)
      if (!state.puzzle[boxIdx][cellIdx].given) {
        state.puzzle[boxIdx][cellIdx].color = 'active'
      }
    },
    enter(state, action) {
      if (state.curCell.boxIdx !== -1 && state.curCell.cellIdx !== -1) {
        const { boxIdx, cellIdx } = state.curCell
        if (!state.puzzle[boxIdx][cellIdx].given) {
          state.puzzle[boxIdx][cellIdx].value = action.payload.value
          validate(state.puzzle, boxIdx, cellIdx)
        }
      }
    },
  },
})

export const { newGame, activeCell, enter } = clueSlice.actions
export default clueSlice.reducer
