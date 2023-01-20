import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const NavbarContainer = styled.nav`
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
`;

const NavbarWrapper = styled.div`
    background: rgb(32, 29, 30);
    padding: 2rem 3rem;
    width: 100%;
    height: auto;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    
    a {
        font-size: 18px;
        text-decoration: none;
        cursor: pointer;
        color: white;
        transition: color 0.5s ease-in-out;
        &:hover {
            color: rgb(115, 95, 82);
        }
    }
`;

const Navbar = () => {
    return (
      <NavbarContainer>
            <NavbarWrapper>
                <Link to="/">Home</Link>
                <Link to="/aboutme/">About</Link>
                <Link to="/portfolio/">Portfolio</Link>
                <Link to="/contactme/">Contact</Link>
            </NavbarWrapper>
        </NavbarContainer>
    )

}

export default Navbar