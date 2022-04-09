import React from 'react'
import Cell from './Cell'

const Boxes = () => {
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div
      className='grid
                    grid-cols-3
                    grid-rows-3
                    gap-px
                    bg-gray-200
                    '
    >
      {boxes.map((box) => (
        <Cell value={box} key={box} />
      ))}
    </div>
  )
}

export default Boxes
