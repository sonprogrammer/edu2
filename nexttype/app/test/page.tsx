'use client'

import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const page = () => {
    const [task, setTask] = useState('')
    const [todos, setTodos] = useState<{text: string, completed:boolean}[]>([])

    const inputTask =(e:any) => {
        setTask(e.target.value)
    }
    
    const handleClick = () => {
        if(task.trim()){
            setTodos([...todos, {text: task, completed: false}])
            setTask('')
        }
    }

    const handle = (e: any) => {
        if(e.key ==='Enter'){
            handleClick()
        }
    }

    const deleteTask = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index))
    }

    const toggle = (index: number) => {
        setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed} : todo))
    }

    
  return (
    <div className='h-screen flex flex-col items-center bg-gray-500 gap-10'>
      <div className='mb-10  flex flex-col justify-center h-[30%]'>
        <h1 className='text-xl text-center mb-10'>todoList</h1>
        <div className='flex'>

        <input 
            className='text-black border rounded-md p-2'
            placeholder='write...'
            value={task}
            onChange={inputTask}
            onKeyDown={handle}
            />
        <button
            className='ml-2 bg-blue-500 text-white px-4 py-2 rounded'
            onClick={handleClick}
            >+</button>
            </div>
      </div>
      <div className='flex flex-col overflow-y-auto max-h-[50%] gap-3 w-[50%] text-center'>
                {todos.length > 0 ?(
            todos.map((todo, index) => (
                <div key={index} className='flex justify-between items-center w-full'>
                    <FormControlLabel 
                        control={
                            <Checkbox 
                                checked={todo.completed}
                                onChange={()=> toggle(index)}
                            />
                        }
                        label={
                            <span className={`${
                                todo.completed ? 'line-through text-gray-900' : ''}`}>
                                {todo.text}
                            </span>
                        }
                    />
                    <button className='text-red-500' onClick={() => deleteTask(index)}>X</button>
                </div>
              ))
        ): (
            <div>
                nothing
            </div>
        )
        }

      </div>
    </div>
  )
}

export default page
