import React from 'react'
import './App.css'
import Grid from './components/Grid'
import Input from './components/Input'

const App = () => (
  <div className='flex justify-center'>
    <div className='w-11/12 h-screen flex flex-col items-center items-stretch gap-4'>
      <header className='pt-4 basis-0 text-center text-3xl font-bold'>Sudoku</header>
      <div className='flex justify-center'>
        <Grid />
      </div>
      <Input />
    </div>
  </div>
)

export default App
