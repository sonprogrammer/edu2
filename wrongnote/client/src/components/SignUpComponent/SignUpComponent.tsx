import React, { useEffect, useState } from 'react'
import { StyledContainer, StyledEmailCheckBtn, StyledInput, StyledInputWrapper, StyledSignupButton } from './style'
import { useNavigate } from 'react-router-dom';


export default function SignUpComponent() {
    const [userPassword, setUserPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)


    const navigate = useNavigate()


    useEffect(() => {
        if (userPassword !== verifyPassword) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
    }, [userPassword, verifyPassword])


    const handleSignupClick = () =>{
        if (!passwordError) {
            alert('가입 성공!');
            // 가입 성공 시 로그인 페이지로 이동
            navigate('/login');
        } else {
            alert(passwordError);
        }
    }


    return (
        <StyledContainer>
            <img src="/favicon.png" alt="logo" className='w-1/3 mb-5 rounded-full' />
            <div className='mb-5 font-bold'>register</div>
            <StyledInputWrapper>
            <StyledInput type="email" placeholder='email or nickname' className='styled-input' />
            <StyledEmailCheckBtn>
                중복 확인
            </StyledEmailCheckBtn>
            </StyledInputWrapper>
            <StyledInput type="password" placeholder='password' value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} />
            <StyledInput type="password" placeholder='check password' value={verifyPassword} onChange={(e) => { setVerifyPassword(e.target.value) }} />
            {passwordError && <div style={{color: 'red', fontWeight:'bold', marginBottom: '10px'}}>비밀번호를 확인하세요</div>}
                <StyledSignupButton  onClick={handleSignupClick}>sign up</StyledSignupButton>


        </StyledContainer>
    )
}
