import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '../reduxStore/todoStore'
import { TodoType } from '../types/todoTypes'

const Todos = () => {
  const { todos }=useSelector((state:RootState)=>state.todo)
  return (
    <>
    {todos && todos.map((todo:TodoType)=>(
      <Todo key={todo.id} todoProps={todo}/>
    ))}
    </>
  )
}

export default Todos