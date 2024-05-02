import React from 'react'
import { StyledAnswer, StyledBox, StyledBtn, StyledContainer, StyledDescription, StyledProblem } from './style'
import { useNavigate } from 'react-router-dom'

export default function MakeProblemComponet() {

    const navigate = useNavigate()
    
    const handleClick = () =>{
        alert('succeeded to add problem')
        navigate('/')
    }
    
  return (
    <StyledBox>
      <StyledContainer>
        <StyledProblem placeholder='문제를 입력하세요' />
        <StyledAnswer  placeholder='정답' />
        <StyledDescription  placeholder='해설' />
      </StyledContainer>
      <StyledBtn onClick={handleClick}>submit</StyledBtn>
    </StyledBox>
  )
}
