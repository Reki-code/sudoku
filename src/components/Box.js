import React from 'react'
import Cell from './Cell'

const Box = ({ box, onClick }) => {
  const handleClick = (cellIdx) => () => onClick(cellIdx)

  return (
    <div
      className='grid
                      grid-cols-3
                      grid-rows-3
                      gap-px
                      bg-gray-200
                      '
    >
      {box.map((item, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <Cell onClick={handleClick(idx)} value={item} key={idx} />
      ))}
    </div>
  )
}

export default Box
