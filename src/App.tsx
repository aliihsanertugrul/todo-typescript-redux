import React from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import Todos from './components/Todos'

function App() {
  

  return (
    <div className='max-w-[600px] mx-auto'>
    <TodoCreate/>
    <Todos/>
    </div>
  )
}

export default App
