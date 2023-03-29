import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: 4rem;
    margin: 6.5% 0;
    color: rgb(32, 29, 30);
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: whitesmoke;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #333;
    margin-top: 1rem;
    text-align: justify;
  }

  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: rgb(32, 29, 30);
    font-size: 1rem;
    padding: 5px;
    &:hover {
      color: rgb(251, 239, 157);
    }
  }
  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1rem;
    }
    img {
      width: 80%;
      height: auto;
    }
  }
`

const LayoutWrapper = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(139, 148, 142);
  color: rgb(32, 29, 30);
  text-align: center;
`;

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyles />
      <LayoutWrapper>
        <Navbar />
        {children}
        <Footer />
      </LayoutWrapper>
    </>
  )
}

export default Layout