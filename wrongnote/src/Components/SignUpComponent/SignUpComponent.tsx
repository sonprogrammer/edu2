import React from 'react'
import { StyledContainer, StyledInput } from './style'

export default function SignUpComponent() {
  return (
    <StyledContainer>
      <StyledInput type="email" placeholder='email'/>
      <StyledInput type="password" placeholder='password'/>
      <StyledInput type="password" placeholder='check password'/>
      <button>register</button>
    </StyledContainer>
  )
}
