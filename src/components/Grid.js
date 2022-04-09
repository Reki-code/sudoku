import React from 'react'
import Box from './Box'

const Grid = ({ className }) => (
  <div
    className={`${className}
            w-fit
            bg-gray-600
            border-solid border-4 border-gray-600
            grid grid-cols-3 grid-rows-3
            gap-0.5`}
  >
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
  </div>
)

export default Grid
