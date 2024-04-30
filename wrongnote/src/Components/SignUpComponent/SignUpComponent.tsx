import React, { useEffect, useState } from 'react'
import { StyledContainer, StyledInput } from './style'

export default function SignUpComponent() {
    const [password, setPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)


    useEffect(()=>{
        if(password !== verifyPassword){
            setPasswordError(true)
        }else{
            setPasswordError(false)
        }
    })
    // const handlePasswordChange = (e)=>{
    //     setPassword(e.target.value)
    //     if(e.target.value !== password){
    //         setPasswordMatchError(true)
    //     }else{
    //         setPasswordMatchError(false)
    //     }
    // }

    // const handleConfirmPasswordChange = (e)=>{
    //     setConfirmPassword(e.target.value)
    //     if(e.target.value !== password){
    //         setPasswordMatchError(true)
    //     }else{
    //         setPasswordMatchError(false)
    //     }
    // }

    // const handleSubmit = () =>{
    //     if(password !== confirmPassword){
    //         setPasswordMatchError(true)
    //     }else{
    //         setPasswordMatchError(false)
    //     }
    // }

  return (
    <StyledContainer>
      <StyledInput type="email" placeholder='email'/>
      <StyledInput type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <StyledInput type="password" placeholder='check password' value={verifyPassword} onChange={(e)=>{setVerifyPassword(e.target.value)}}/>
      {passwordError && <div>비밀번호를 확인하세요</div>}

    </StyledContainer>
  )
}
