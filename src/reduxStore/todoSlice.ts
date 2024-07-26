import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../types/todoTypes'



const initialState : TodoInitialState = {
    todos:[
     {
       id:1,
      content:"My first todo"
     }
    ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo:(state:TodoInitialState, action:PayloadAction<TodoType>)=>{
      state.todos=[...state.todos,action.payload]
    },
    removeTodoById: (state: TodoInitialState, action: PayloadAction<number>) => {
      state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
  },
  updateTodoByContent : (state:TodoInitialState, action : PayloadAction<TodoType>)=>{
   state.todos=[...state.todos.map((todo)=>(
    todo.id == action.payload.id ? action.payload : todo
   ))]
  }
  },
})

// Action creators are generated for each case reducer function
export const {createTodo,removeTodoById ,updateTodoByContent} = todoSlice.actions

export default todoSlice.reducer