import React, { useState } from 'react'

const Cell = ({ value, onClick }) => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(true)
    onClick()
  }

  return (
    <button
      className={`aspect-square ${click ? 'bg-yellow-300' : 'bg-gray-50'}`}
      onClick={handleClick}
      type='button'
    >
      {value}
    </button>
  )
}

export default Cell
