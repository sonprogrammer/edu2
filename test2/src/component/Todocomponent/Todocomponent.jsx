import React, { useEffect, useState } from 'react'
import { StyledButton, StyledCheckBox, StyledContainer, StyledCount, StyledInput, StyledTitle, StyledTodoList } from './style'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';


const Todocomponent = () => {
  const [checked, setChecked] = useState(false)
  const [todo, setTodo] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [endCount, setEndCount] = useState(0)


  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  
  const handleClick = (e) => {
    if(inputValue.trim()){
      setTodo([...todo, {text: inputValue, completed: false}])
      setInputValue('')
    }
  }

  const handleInputKey = (e) => {
    if(e.key ==='Enter'){
      handleClick()
    }
  }
  
  const handleCheckboxChange = (index) => {
    const updatedTodo = todo.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setTodo(updatedTodo);
  };

  const handleCount = () => {
    //투두에서 투두.compoleted가 true인거 갯수를 찾으면됨
    const count = todo.filter(todo => todo.completed)
    setEndCount(count.length)
    console.log(count)
  }

  useEffect(() => {
    handleCount()
  },[todo])

  
  return (
    <StyledContainer>
            <StyledTitle>
              what to do Today?
            </StyledTitle>
            <StyledCount>
              <h2>끝난일 : {endCount}</h2>
              <h2>해야할일 : {todo.length - endCount}</h2>
            </StyledCount>

            <StyledInput>
              <input type="text" value={inputValue} onKeyDown={handleInputKey} onChange={handleInputChange} placeholder='what to do'/>
              <StyledButton variant="contained" onClick={handleClick} >add</StyledButton>
            </StyledInput>
            <StyledCheckBox>
              {todo.map((item, i) => (
                <StyledTodoList>
                  <Checkbox onChange={() => handleCheckboxChange(i)} 
                  />
                  <p style={{
                    textDecoration: item.completed ? 'line-through' : 'none'
                      ,color: item.completed ? 'red' : 'blue'
                    }}>
                      {item.text}</p>
                </StyledTodoList>
              ))}
            </StyledCheckBox>

    </StyledContainer>

  )
}

export default Todocomponent
