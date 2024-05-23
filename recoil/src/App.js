import { useRecoilValue } from 'recoil';
import './App.css';
import { filterdTodoListState, todoListState } from './TodoAtoms';
import TodoItemCreator from './components/TodoItemCreator';
import TodoItem from './components/TodoItem';
import TodlListFilter from './components/TodlListFilter';
import TodoListStats from './components/TodoListStats';
import { currentUserNameQuery } from './UserAtoms';

import React from 'react';

function App() {
  const todoList = useRecoilValue(todoListState)

  //*filter된 todolist가 반환됨
  const filterdTodoList = useRecoilValue(filterdTodoListState)
  console.log(todoList)
  console.log('filterdTodoList', filterdTodoList)

  return (
    <div>
      <React.Suspense fallback={<div>Loading....</div>}>
        <CurrentUser />

      </React.Suspense>
      <TodoListStats />
      <TodlListFilter />
      <TodoItemCreator />
      {filterdTodoList.map((todoItem) =>(
        <>
        <TodoItem key={todoItem.id} item={todoItem} />
        </>
      ))}
    </div>
  );
}

export default App;


function CurrentUser(){
  const userName = useRecoilValue(currentUserNameQuery)
  return(
    <div>{userName}</div>
  )
}