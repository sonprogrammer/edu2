import React, { useState } from 'react'
import { StyledContainer, StyledLogo, StyledLogoutModal, StyledSearch, StyledTags } from './style'
import { Link, useNavigate } from 'react-router-dom'
import LogoutModal from './LogoutModal'


export default function NavbarComponent() {
    const [logout, setLogout] = useState(false)

    const navigate = useNavigate()
    

    const handleLogoutClick = () => {
        setLogout(!logout)
    }

    const handleLogoutConfirm = () => {
        navigate('/')
    }

    const handleCancelLogout = () => {
        setLogout(false);
      };

    return (
        <StyledContainer>
            <StyledLogo>
                <Link to='/browse'>
                CAN
                </Link>
            </StyledLogo>
            <StyledSearch type='search'/>
            <StyledTags>
                <Link to='/browse/note'>my note</Link>
                <Link to='/browse/test'>20 test</Link>
                <Link className='text-black' onClick={handleLogoutClick}>logout</Link>
            </StyledTags>
            <StyledLogoutModal onClick={handleCancelLogout}>
            {logout && (
                <LogoutModal onConfirm={handleLogoutConfirm} onCancel={handleCancelLogout} text='text'/>
            )}
            </StyledLogoutModal>
        </StyledContainer>
    )
}
