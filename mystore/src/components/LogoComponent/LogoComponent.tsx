
import { StyledContainer } from './style'
import { Link } from 'react-router-dom'

const LogoComponent = () => {
  return (
    <StyledContainer>
        <Link to='/'>  
            <h1>sonprogrammer</h1>
        </Link> 
    </StyledContainer>
  )
}

export default LogoComponent
