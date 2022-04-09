import React from 'react'
import { useState } from 'react'

const Cell = ({ value }) => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(true)
  }

  return (
    <div
      className={`w-6 h-6 ${click ? 'bg-yellow-300' : 'bg-gray-50'}`}
      onClick={handleClick}>
      {value}
    </div>
  )
}

export default Cell
