import React from 'react'
import { useDispatch } from 'react-redux'
import { newGame, enter } from '../reducers/clueReducer'

const Input = () => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const dispatch = useDispatch()

  const handleNewGame = () => {
    dispatch(newGame())
  }

  const handleClick = ({ target }) => {
    dispatch(enter({ value: target.textContent }))
  }
  return (
    <div className='flex place-content-around items-start'>
      <button
        type='button'
        onClick={handleNewGame}
      >
        New Game
      </button>
      <div className='w-1/3 aspect-square grid grid-cols-3 grid-rows-3 border'>
        {input.map((num) => (
          <button type='button' onClick={handleClick} key={num}>
            {num}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Input
