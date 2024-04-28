import React, { useState } from 'react'
import { StyledContainer, StyledBox } from './style'

export default function ProblemComponent() {
  const[answer, setAnswer] = useState(false)

  const handleClick = () => {
    setAnswer(!answer)
  }

  return (
    <StyledBox>
      <StyledContainer>
        <p>descriptionfdsafadsfsdafsdafsdafsdafadsfdasfasdfdsa</p>
        { answer ? (
          <h1 onClick={handleClick}>answer</h1>
        ):
        (
          <h1 onClick={handleClick}>Check the answer</h1>
        )
      }
      </StyledContainer>
      <StyledContainer>
        <p>description</p>
        <h1>answer</h1>
      </StyledContainer>
     
      <StyledContainer>
        <p>description</p>
        <h1>answer</h1>
      </StyledContainer>
      <StyledContainer>
        <p>description</p>
        <h1>answer</h1>
      </StyledContainer>
      <StyledContainer>
        <p>description</p>
        <h1>answer</h1>
      </StyledContainer>
      <StyledContainer>
        <p>description</p>
        <h1>answer</h1>
      </StyledContainer>
     
    </StyledBox>
  )
}
