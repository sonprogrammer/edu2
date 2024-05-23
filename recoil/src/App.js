import { useRecoilValue } from 'recoil';
import './App.css';
import { todoListState } from './TodoAtoms';
import TodoItemCreator from './components/TodoItemCreator';
import TodoItem from './components/TodoItem';

function App() {
  const todoList = useRecoilValue(todoListState)
  console.log(todoList)

  return (
    <div>
      <TodoItemCreator />
      {todoList.map((todoItem) =>(
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;
