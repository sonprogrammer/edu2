import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({value, onIncrement, onDecrement}: Props) {


  const counter = useSelector((state: RootState) => state.counter)
  const todos: string[] = useSelector((state: RootState) => state.todos)


  const [todoValue, setTodoValue] = useState("")
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setTodoValue(e.target.value)
  }

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void =>{
    e.preventDefault()
    dispatch({ type : "ADD_TODO", text: todoValue})
    setTodoValue('')
  }


  return (
    <div className="App">
      {/* Clicked: {value}times */}
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
