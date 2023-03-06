import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const LayoutWrapper =  styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: rgb(180, 182, 169);
  background-color: rgb(139, 148, 142);
  color: rgb(32, 29, 30);
  h1 {
    font-size: 64px;
    margin: 10% 0 0 0;
`;

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <Navbar />
        {children}
        <Footer />
      </LayoutWrapper>
    </>
  )
}

export default Layout