import React, { useEffect, useState } from 'react'
import { StyledContainer, StyledEmailCheckBtn, StyledInput, StyledInputWrapper, StyledSignupButton } from './style'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function SignUpComponent() {
    const [userPassword, setUserPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [formData, setFormData] = useState({
        userId : '',
        userPassword : ''
    })


    const navigate = useNavigate()


    useEffect(() => {
        if (userPassword !== verifyPassword) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
    }, [userPassword, verifyPassword])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value})
        setVerifyPassword(e.target.value)
    }

    const handleSignupClick = async () =>{
        try {
            const response = await axios.post('http://localhost:3000/api/account/signup')
            console.log('response', response)
            if (!passwordError) {
                alert('가입 성공!');
                // 가입 성공 시 로그인 페이지로 이동
                navigate('/login');
            } else {
                alert(passwordError);
            }
            
        } catch (error) {
            console.log('error', error)
        }
    }


    return (
        <StyledContainer>
            <img src="/favicon.png" alt="logo" className='w-1/3 mb-5 rounded-full' />
            <div className='mb-5 font-bold'>register</div>
            <StyledInputWrapper>
            <StyledInput name='userId' value={formData.userId} type="email" placeholder='email or nickname' className='styled-input' onChange={handleChange}/>
            <StyledEmailCheckBtn>
                중복 확인
            </StyledEmailCheckBtn>
            </StyledInputWrapper>
            <StyledInput name='userPassword' type="password" placeholder='password' value={formData.userPassword}onChange={handleChange}  />
            <StyledInput name='userPassword' type="password" placeholder='check password' value={formData.userPassword} onChange={(e) => { setVerifyPassword(e.target.value) }} />
            {passwordError && <div style={{color: 'red', fontWeight:'bold', marginBottom: '10px'}}>비밀번호를 확인하세요</div>}
                <StyledSignupButton  onClick={handleSignupClick}>sign up</StyledSignupButton>


        </StyledContainer>
    )
}
