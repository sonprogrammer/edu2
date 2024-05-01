import React from 'react'
import { StyledAnswer, StyledBox, StyledBtn, StyledContainer, StyledDescription, StyledProblem } from './style'

export default function AddProblemPage() {
  return (
    <StyledBox>
      <StyledContainer>
        <StyledProblem type="text" placeholder='문제를 입력하세요' />
        <StyledAnswer type="answer" placeholder='정답' />
        <StyledDescription type="description" placeholder='해설' />
      </StyledContainer>
      <StyledBtn>submit</StyledBtn>
    </StyledBox>
  )
}
