import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Main = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  text-align: center;
  h1 {
    font-size: 64px;
    margin: 10% 0 0 0;
  }
  p {
    font-size: 36px;
  }
  a {
    text-decoration: none;
  }
`

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <Main>
          {/* <Navbar /> */}
          <h1>{data.contentfulHomePage.title}</h1>
          <h2>{data.contentfulHomePage.presentationText.presentationText}</h2>
          <img src={data.contentfulHomePage.image.url} height={800} alt={data.contentfulHomePage.title} />
      </Main>
    </Layout>
  )
}

export default IndexPage

export const Head = ({ data }) => <title>Home Page</title>

// Graphql Query
export const IndexPageQuery = graphql `
query myQuery {
  contentfulHomePage {
    
      title
      presentationText {
        presentationText
      }
      image {
        url
      }
    
  }
}
`;
