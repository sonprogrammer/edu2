import React from 'react'
import { StyledButton, StyledTextButton, StyledContainer, StyledInput, StyledTextWrapper } from './style'
import { Link } from 'react-router-dom'

export default function LoginComponent() {
    return (
        <StyledContainer>
            <img src="/favicon.png" alt="logo" className='w-1/3 mb-10 rounded-full' />
            <div>
                <StyledInput type="email" placeholder='email' />
                <StyledInput type="password" placeholder='password' />
            </div>
            <div>
                <input type="checkbox" className='peer mr-2' />
                <span>이메일 기억하기</span>
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
