import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const NavbarWrapper = styled.nav`
    background: rgb(32, 29, 30);
    padding: 2rem 3rem;
    width: 100%;
    height: 80px;
    align-items: center;
    display: flex;
    justify-content: space-between;

    a {
    font-size: 18px;
    text-decoration: none;
    color: white;
    }
`;

const Navbar = () => {

    return (
        <div>
            <NavbarWrapper>
                <Link to="/">Home</Link>
                <Link to="/aboutme/">About</Link>
                <Link to="/portfolio/">Portfolio</Link>
                <Link to="/contactme/">Contact</Link>
            </NavbarWrapper>
        </div>
    )

}

export default Navbar