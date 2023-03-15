import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Main = styled.div`
  height: 80vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  text-align: center;
  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
` 

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <Main>
          <h1>{data.contentfulHomePage.title}</h1>
          <h2>{data.contentfulHomePage.presentationText.presentationText}</h2>
          <img src={data.contentfulHomePage.image.url} height={400} alt={data.contentfulHomePage.title} />
      </Main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

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
