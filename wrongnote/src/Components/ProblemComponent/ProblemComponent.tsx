import React, { useEffect, useState } from 'react'
import { StyledContainer, StyledBox } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { setShowAnwser } from '../../store'
import axios from 'axios'


export default function ProblemComponent() {
  const [showAnswer, setShowAnwser] = useState(false)
  const [showAnswer2, setShowAnwser2] = useState(false)
  // const[isExpand, setIsExpand] = useState(false)
  
  const handleClick = () => {
    setShowAnwser(!showAnswer)
  }
  const handleClick2 = () => {
    setShowAnwser2(!showAnswer2)
  }

  //*설명길이가 길면 20자 이상뒤로 부턴 ...으로 대체
  // const OverDescription = isExpand ?
  //   description : description?.slice(0, 20) + '...'


  return (
    <StyledBox>
      <StyledContainer answer={showAnswer}>
        <p>내 출생연도와 내 이름과 내 나이는?</p>
        { showAnswer ? (
          <h1 onClick={handleClick}>답 : 1997.01.26 손영진</h1>
        ):
        (
          <h1 onClick={handleClick}>Check the answer</h1>
        )
      }
      </StyledContainer>
      <StyledContainer answer={showAnswer2}>
        <p>내 출생연도와 내 이름과 내 나이는?</p>
        { showAnswer2 ? (
          <h1 onClick={handleClick2}>답 : 1997.01.26 손영진</h1>
        ):
        (
          <h1 onClick={handleClick2}>Check the answer</h1>
        )
      }
      </StyledContainer>
    
    </StyledBox>
  )
}

