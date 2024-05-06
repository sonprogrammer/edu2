import { useState } from 'react'
import { StyledButton, StyledTextButton, StyledContainer, StyledInput, StyledTextWrapper } from './style'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function LoginComponent() {
    const [isEmailChecked, setIsEmailChecked] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate()

    const handleEmailClick = () => {
        setIsEmailChecked(!isEmailChecked);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value})
    }

    const handleLoginClick = async () => {
        try {
            const response = await axios.post('/login', formData)
            console.log('response',response)
            console.log('success to login', response.data)
            navigate('/browse')
        } catch (error: unknown) {
            console.log('error to login', error.response.data)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 동작 방지
        handleLoginClick(); // 로그인 클릭 이벤트 호출
    }

    return (
        <StyledContainer>
            <img src="/favicon.png" alt="logo" className='w-1/3 mb-10 rounded-full' />
                <form onSubmit={handleSubmit}>
                <StyledInput name='email' type="email" placeholder='email' value={formData.email} onChange={handleChange}/>
                <StyledInput name='password' type="password" placeholder='password' value={formData.password} onChange={handleChange}/>
                </form>
            <div>
                <input type="checkbox" className='peer mr-2' checked={isEmailChecked} onChange={handleEmailClick}/>
                <span onClick={handleEmailClick} style={{cursor:'pointer'}}>이메일 기억하기</span>
            </div>
            <div>
                <StyledButton onClick={handleLoginClick}>Login</StyledButton>
                {/* 회원정보 검사후 맞으면 main페이지로 이동 */}
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
