import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { activeCell } from '../reducers/clueReducer'

const Cell = ({ boxIdx, cellIdx }) => {
  const cell = useSelector((state) => state.clue.puzzle[boxIdx][cellIdx])
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(activeCell({ boxIdx, cellIdx }))
  }

  return (
    <button
      className={`aspect-square ${cell.color !== 'blank' ? 'bg-yellow-300' : 'bg-gray-50'}`}
      onClick={handleClick}
      type='button'
    >
      {cell.value}
    </button>
  )
}

export default Cell
