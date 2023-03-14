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
    /* margin: 1rem 0; */
    margin: 10% 0;
    color: rgb(32, 29, 30);
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
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
    /* color: rgb(20, 21, 23); */
    &:hover {
      color: rgb(115, 95, 82);
    }
  }
`

const LayoutWrapper =  styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(139, 148, 142);
  color: rgb(32, 29, 30);
  text-align: center;
  /* padding: 1rem; */
  /* margin-bottom: 200px; */
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