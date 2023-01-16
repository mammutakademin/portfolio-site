import React from "react"
import styled from "styled-components"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const LayoutWrapper =  styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(180, 182, 169);
  width: 90%;
  a {
    text-decoration: none;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <Navbar />
        {children}
      </LayoutWrapper>
      <Footer />
    </>
  )
}

export default Layout