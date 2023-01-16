import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  h1 {
    margin: 0;
  }
  a {
    color: white;
  }
`

const NotFoundPage = () => {

    return (
      <main>
          <Link to="/">Home</Link>
          <Link to="/portfolio/">Portfolio</Link>
          <Link to="/contactme/">Contact</Link>
          <Wrapper>
            <h2>Page not found.</h2>
          </Wrapper>
      </main>
    )
  }
  
  export default NotFoundPage