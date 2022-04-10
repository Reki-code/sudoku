import React from 'react'
import Cell from './Cell'

const Box = ({ boxIdx }) => (
  <div
    className='grid
                      grid-cols-3
                      grid-rows-3
                      gap-px
                      bg-gray-200
                      '
  >
    {[...Array(9)].map((item, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <Cell boxIdx={boxIdx} cellIdx={idx} key={idx} />
    ))}
  </div>
)

export default Box
