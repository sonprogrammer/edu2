import React from 'react'
import { StyledContainer, StyledLogo, StyledSearch, StyledTags } from './style'
import { Link } from 'react-router-dom'


export default function NavbarComponent() {
    return (
        <StyledContainer>
            <StyledLogo>
                <Link to='/'>
                CAN
                </Link>
            </StyledLogo>
            <StyledSearch type='search'/>
            <StyledTags>
                <Link to='/note'>my note</Link>
                <Link to='/test'>20 test</Link>
                <Link to='/main' className='text-black'>logout</Link>
            </StyledTags>
        </StyledContainer>
    )
}
