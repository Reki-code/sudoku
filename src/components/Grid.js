import React from 'react'
import { useSelector } from 'react-redux'
import Box from './Box'

const Grid = () => {
  const clue = useSelector((store) => store.clue.puzzle)

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
        // eslint-disable-next-line react/no-array-index-key
        clue.map((box, idx) => <Box box={box} key={idx} />)
      }
    </div>
  )
}

export default Grid
