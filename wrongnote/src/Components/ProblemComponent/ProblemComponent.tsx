import React, { useState } from 'react'
import { StyledContainer, StyledBox } from './style'

export default function ProblemComponent() {
  const[answer, setAnswer] = useState(false)
  const[isExpand, setIsExpand] = useState(false)
  
  const handleClick = () => {
    setAnswer(!answer)
  }

  // const OverDescription = isExpand ?
  //   description : description?.slice(0, 20) + '...'


  return (
    <StyledBox>
      <StyledContainer answer={answer}>
        <p>내 출생연도와 내 이름과 내 나이는?</p>
        { answer ? (
          <h1 onClick={handleClick}>1997.01.26 손영진</h1>
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
    </StyledBox>
  )
}
