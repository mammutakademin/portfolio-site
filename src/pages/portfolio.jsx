import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const PortfolioPage = ({ data }) => {
  // const portfolioPage = data.allContentfulWork.nodes
  // const {title, featuredImage, description} = portfolioPage
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
const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

  return (
    <Layout>
      <h1>Portfolio</h1>
      {data.allContentfulWork.edges.map(({ node }) => (
        <Main>
          <a href={node.link} target="_blank" rel="noreferrer">{node.title}</a>
          <img src={node.featuredImage.url} width="400" alt="" />
          <p>{node.description.description}</p>
          <p>{node.projectCategory}</p>
        </Main>
      ))}

    </Layout>
  )
}

export default PortfolioPage

export const Head = () => <title>Portfolio</title>

// Graphql Query
export const PortfolioPageQuery = graphql `
query myQuery {
  allContentfulWork {
    edges {

      node {
        title
        link
        featuredImage {
          url
        }
        description {
          description
        }
        projectCategory
      }
    }
  }
}
`;