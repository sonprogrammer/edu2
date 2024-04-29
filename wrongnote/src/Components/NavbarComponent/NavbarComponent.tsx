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
                <Link to='/problem'>problem</Link>
                <Link to='/login'>login</Link>
            </StyledTags>
        </StyledContainer>
    )
}
