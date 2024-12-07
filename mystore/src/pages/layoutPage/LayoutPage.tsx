import React from 'react'
import { LogoComponent } from '../../components/LogoComponent'
import { Outlet } from 'react-router-dom'
import { NavbarComponent } from '../../components/NavbarComponent'
import { StyledContainer, StyledNav, StyledOutlet } from './style'

const LayoutPage = () => {
    return (
        <StyledContainer>
            
            <LogoComponent />
            
            <StyledOutlet>
                <Outlet />
            </StyledOutlet>

            <StyledNav>
                <NavbarComponent />
            </StyledNav>

        </StyledContainer>
    )
}

export default LayoutPage
