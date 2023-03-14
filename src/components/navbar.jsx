import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import MyLogo from '../images/edith_logo.jpg'

const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: black;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 700px) {
        height: 80px;
    }
`

const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`

const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`

const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`

const NavbarLinkContainer = styled.div`
    display: flex;
`

const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media only screen and (max-width: 700px) {
        display: none;
    }
`

const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`

const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
`

const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media only screen and (min-width: 700px) {
        display: none;
    }
`

const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 700px) {
        display: none;
    }    
`

const Navbar = () => {
    const [ extendNavbar, setExtendNavbar ] = useState(false)

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Home</NavbarLink>
                        <NavbarLink to="/aboutme/">About</NavbarLink>
                        <NavbarLink to="/portfolio/">Portfolio</NavbarLink>
                        <NavbarLink to="/contactme/">Contact</NavbarLink>
                        <OpenLinksButton 
                            onClick={() => {
                                setExtendNavbar((curr) => !curr)
                        }}>
                            {extendNavbar ? <> &#10005; </> : <> &#8801; </>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <Logo src={MyLogo} alt='My Logo' />
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/aboutme/">About</NavbarLinkExtended>
                    <NavbarLinkExtended to="/portfolio/">Portfolio</NavbarLinkExtended>
                    <NavbarLinkExtended to="/contactme/">Contact</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    )
}

export default Navbar