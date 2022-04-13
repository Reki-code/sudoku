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

//
// [0,0] [0,1] [0,2]  |  [0,3] [0,4] [0,5]  |  [0,6] [0,7] [0,8]
// [1,0] [1,1] [1,2]  |  [1,3] [1,4] [1,5]  |  [1,6] [1,7] [1,8]
// [2,0] [2,1] [2,2]  |  [2,3] [2,4] [2,5]  |  [2,6] [2,7] [2,8]
// -------------------+---------------------+-------------------
// [3,0] [3,1] [3,2]  |  [3,3] [3,4] [3,5]  |  [3,6] [3,7] [3,8]
// [4,0] [4,1] [4,2]  |  [4,3] [4,4] [4,5]  |  [4,6] [4,7] [4,8]
// [5,0] [5,1] [5,2]  |  [5,3] [5,4] [5,5]  |  [5,6] [5,7] [5,8]
// -------------------+---------------------+-------------------
// [6,0] [6,1] [6,2]  |  [6,3] [6,4] [6,5]  |  [6,6] [6,7] [6,8]
// [7,0] [7,1] [7,2]  |  [7,3] [7,4] [7,5]  |  [7,6] [7,7] [7,8]
// [8,0] [8,1] [8,2]  |  [8,3] [8,4] [8,5]  |  [8,6] [8,7] [8,8]
const arrayIdx2GridIdx = (idx) => {
  const row = Math.floor(idx / 9)
  const col = idx % 9

  const gridRow = Math.floor(row / 3)
  const gridCol = Math.floor(col / 3)
  const boxIdx = gridRow * 3 + gridCol

  const boxRow = row % 3
  const boxCol = col % 3
  const cellIdx = boxRow * 3 + boxCol
  return { boxIdx, cellIdx }
}

const clueSlice = createSlice({
  name: 'clue',
  initialState,
  reducers: {
    newGame(state) {
      const sudoku = getSudoku('easy')
      sudoku.puzzle.split('')
        .forEach((value, idx) => {
          const { boxIdx, cellIdx } = arrayIdx2GridIdx(idx)

          if (value !== '-') {
            state.puzzle[boxIdx][cellIdx].given = true
            state.puzzle[boxIdx][cellIdx].value = value
          } else {
            state.puzzle[boxIdx][cellIdx].given = false
            state.puzzle[boxIdx][cellIdx].value = ' '
          }
          state.puzzle[boxIdx][cellIdx].solution = sudoku.solution[idx]
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
