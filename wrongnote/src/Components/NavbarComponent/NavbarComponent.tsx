import React from 'react'
import { StyledContainer, StyledLogo, StyledSearch, StyledTags } from './style'

export default function NavbarComponent() {
    return (
        <StyledContainer>
            <StyledLogo href='#'>
                CAN
            </StyledLogo>
            <StyledSearch>
                search
            </StyledSearch>
            <StyledTags>
                <h2>problem</h2>
                <h2>login</h2>
            </StyledTags>
        </StyledContainer>
    )
}
