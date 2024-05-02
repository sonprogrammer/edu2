
// import { LoginComponent } from '../../components'
import { StyledBox, StyledContainer, StyledLoginBtn, StyledSignupBtn, StyledTitle, StyledVideo, StyledVideoBackground } from './style'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login')
  }
  const handleSignupClick = () => {
    navigate('/signup')
  }
  return (
    <div>
      <StyledBox>
        <StyledVideoBackground>
          <StyledVideo autoPlay loop muted src='/landing.mp4' className='bg-video' />
        </StyledVideoBackground>
        <div>
        <StyledTitle>오답노트와 무제풀이를 한번에!!</StyledTitle>
        <h1 className='text-yellow-300 absolute
        top-[35%]
        left-[47%]
        text-5xl
        mb-20'>can</h1>
        </div>
        <StyledContainer>
          <StyledLoginBtn onClick={handleLoginClick}>Login</StyledLoginBtn>
          <StyledSignupBtn onClick={handleSignupClick}>Signup</StyledSignupBtn>
        </StyledContainer>
      </StyledBox>
    </div>
  )
}

{/* <LoginComponent /> */ }