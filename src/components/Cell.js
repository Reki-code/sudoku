import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { activeCell } from '../reducers/clueReducer'

const Cell = ({ boxIdx, cellIdx }) => {
  const cell = useSelector((state) => state.clue.puzzle[boxIdx][cellIdx])
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(activeCell({ boxIdx, cellIdx }))
  }

  let backgroundColor = 'bg-yellow-300'
  if (cell.color === 'given') {
    backgroundColor = 'bg-slate-100'
  } else if (cell.color === 'blank') {
    backgroundColor = 'bg-slate-50'
  } else if (cell.color === 'active') {
    backgroundColor = 'bg-yellow-300'
  }

  return (
    <button
      className={`aspect-square ${backgroundColor}`}
      onClick={handleClick}
      type='button'
    >
      {cell.value}
    </button>
  )
}

export default Cell
