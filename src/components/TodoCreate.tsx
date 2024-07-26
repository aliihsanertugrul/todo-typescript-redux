import React, { useState } from 'react'
import "../index.css"
import { useDispatch } from 'react-redux'
import { TodoType } from '../types/todoTypes'
import { createTodo } from '../reduxStore/todoSlice'

const TodoCreate = () => {
    const dispatch=useDispatch()
    const [todoText, setTodoText] = useState<string>("")
    const handleCreateTodo = () => {
      if(todoText.trim().length==0){
        return;
      }
      const payload : TodoType={
        id: Math.floor(Math.random()*100000),
        content: todoText
      }

      dispatch(createTodo(payload));
      setTodoText("")
    }
  return (
    <div className='todo-create  bg-slate-200 p-4 rounded-md '>
        <input onChange={(e : React.ChangeEvent<HTMLInputElement>)=> setTodoText(e.target.value)} value={todoText} type="text" placeholder='Create your todo ...'/>
        <button onClick={handleCreateTodo}>Click</button>
    </div>
  )
}

export default TodoCreate