import React from 'react'
import './App.css'
import Grid from './components/Grid'
import Input from './components/Input'

const App = () => (
  <div className="h-screen flex flex-col items-center items-stretch gap-4">
    <header className="basis-0 text-center text-3xl font-bold">Sudoku</header>
    <div className="flex justify-center">
      <Grid />
    </div>
    <Input className="grow" />
  </div>
)

export default App
