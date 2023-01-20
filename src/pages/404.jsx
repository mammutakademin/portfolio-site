import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
  
  a {
    color: gray;
  }
`

const NotFoundPage = () => {

    return (
      <main>
            <Wrapper>
              <h2>Ooops! The page you are looking for has been removed or relocated.</h2>
              <Link to="/">Go Back</Link>
            </Wrapper>
      </main>
    )
  }
  
  export default NotFoundPage