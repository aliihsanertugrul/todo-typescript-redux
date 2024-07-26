import React, { useState } from 'react'
import { HiPencilSquare } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { TodoType } from '../types/todoTypes';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodoByContent }  from "../reduxStore/todoSlice"
import { FaCheck } from "react-icons/fa";

interface TodoPropsType {
  todoProps:TodoType
}

const Todo = ({todoProps}:TodoPropsType) => {
  const {id,content}=todoProps;
  const [editable, setEditable] = useState<boolean>(false)
  const [updatedTodo, setUpdatedTodo] = useState<string>(content)
  const [animateClass, setAnimateClass] = useState<string>('');

  const dispatch =useDispatch();
  const handleDelete = () => {
    dispatch(removeTodoById(id))
  }
  const handleUpdate = (e : React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTodo(e.target.value)
   
  }

  const handleFocusInput = () => { 
    setEditable(true)
    setAnimateClass("animate-pulse")
   }
  const handleCreateNewTodo = () => {
    const payload : TodoType = {
      id: id,
      content : updatedTodo
    }

    dispatch(updateTodoByContent(payload));
    setEditable(false);
    setAnimateClass("")
  }
  return (
    <div className='flex items-center justify-between bg-slate-200 p-4 rounded-md h-[70px] my-3'>
  
       {editable ? <input type="text" className={` outline-none bg-amber-400 w-full rounded-md ps-4 p-2 ${animateClass}`} onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleUpdate(e)} value={updatedTodo}/> : <div className='ps-4'>{content}</div> }
   

        
        <div className='flex items-center'>
      
        <IoClose color='red' size={25} onClick={handleDelete}/> 

        {editable ? <FaCheck color='green' size={20} onClick={handleCreateNewTodo}/> : <HiPencilSquare color='green' size={20} onClick={()=>handleFocusInput()}/> }
        
        </div>
    </div>
  )
}

export default Todo