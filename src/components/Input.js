import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newGame } from '../reducers/clueReducer'

const Input = ({ className }) => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [cur, setCur] = useState(0)
  const dispatch = useDispatch()

  const handleNewGame = () => {
    dispatch(newGame())
  }

  const handleClick = ({ target }) => {
    setCur(target.textContent)
  }
  return (
    <div className={className}>
      <div className='flex place-content-around items-start'>
        <div className='w-1'>{cur}</div>
        <button
          type='button'
          onClick={handleNewGame}
        >
          New Game
        </button>
        <button
          type='button'
          className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        >
          Undo
        </button>
        <div className='grid grid-cols-3 grid-rows-3 border'>
          {input.map((num) => (
            <button type='button' onClick={handleClick} className='h-8 w-8' key={num}>
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Input
