import React, { useState } from 'react'
import { StyledButton, StyledTextButton, StyledContainer, StyledInput, StyledTextWrapper } from './style'
import { Link } from 'react-router-dom'

export default function LoginComponent() {
    const [isEmailChecked, setIsEmailChecked] = useState(false);


    const handleEmailClick = () => {
        setIsEmailChecked(!isEmailChecked);
    };

    return (
        <StyledContainer>
            <img src="/favicon.png" alt="logo" className='w-1/3 mb-10 rounded-full' />
                <StyledInput type="email" placeholder='email' />
                <StyledInput type="password" placeholder='password' />
            <div>
                <input type="checkbox" className='peer mr-2' checked={isEmailChecked} onChange={handleEmailClick}/>
                <span onClick={handleEmailClick} style={{cursor:'pointer'}}>이메일 기억하기</span>
            </div>
            <div>
                <StyledButton>login</StyledButton>
                <StyledTextWrapper>
                    <span>not a member?</span>
                    <Link to='/signup'>
                        <StyledTextButton>register</StyledTextButton>
                    </Link>
                </StyledTextWrapper>
            </div>

        </StyledContainer>
    )
}