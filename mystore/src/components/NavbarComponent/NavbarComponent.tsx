import React from 'react'
import { StyledBar, StyledContainer } from './style'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <StyledContainer>
        <Link to='/cart'>
            장바구니
        </Link>
        <StyledBar></StyledBar>
        <Link to='/mypage'>
            구매내역
        </Link>
    </StyledContainer>
  )
}

export default NavbarComponent
