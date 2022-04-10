import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { newGame } from '../reducers/clueReducer'
import Box from './Box'

const Grid = () => {
  const clue = useSelector((store) => store.clue.puzzle)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newGame())
  }, [dispatch])

  const handleClick = (boxIdx) => {
    const handleCellClick = (cellIdx) => {
      const x = cellIdx % 3
      const y = Math.floor(cellIdx / 3)
      console.log(`box:${boxIdx} x:${x} y:${y}`)
    }
    return handleCellClick
  }

  return (
    <div
      className='
              w-11/12
              bg-gray-600
              border-solid border-4 border-gray-600
              grid grid-cols-3 grid-rows-3
              gap-0.5'
    >
      {
        clue.map((box, idx) => (
          <Box
            box={box}
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            onClick={handleClick(idx)}
          />
        ))
      }
    </div>
  )
}

export default Grid
