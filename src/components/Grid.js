import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { newGame } from '../reducers/clueReducer'
import Box from './Box'

const Grid = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newGame())
  }, [dispatch])

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
        [...Array(9)].map((box, idx) => (
          <Box
            box={box}
            boxIdx={idx}
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
          />
        ))
      }
    </div>
  )
}

export default Grid
