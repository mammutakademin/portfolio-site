import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 700px) {
        p {
          font-size: 70%;
        }
    }
`;

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <p>Copyright &copy; by Editha Trinitaria, {new Date().getFullYear()}</p>
      </FooterWrapper>
    </div>
  )
}

export default Footer