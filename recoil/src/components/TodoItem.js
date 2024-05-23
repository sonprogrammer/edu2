import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../TodoAtoms'

const TodoItem = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState)

    const index = todoList.findIndex((listItem) => listItem === item)

    const editItemText = ({target : { value }}) =>{
        const newList = replaceItemAddIndex(todoList, index, {
            ...item,
            text: value
        })
        setTodoList(newList)
    }
    
  return (
    <div>
      <input type='text' value={item.text} onChange={editItemText} />
    </div>
  )
}

function replaceItemAddIndex(arr, index, newValue) {
    return [...arr.slice(0,index), newValue, ...arr.slice(index + 1)]
}


export default TodoItem
