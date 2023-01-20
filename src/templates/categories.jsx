import * as React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const CategoriesPage = ({ data }) => {
  const CategoriesWrapper = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    text-align: center;
    h1 {
      font-size: 3rem;
      margin-top: 3rem;
    }
    p {
      font-size: 1.25rem;
    }
    a {
      text-decoration: none;
      &:hover {
        color: gray;
      }
    }
`

  return (
    <main>
      <Layout>
        <h1>Categories</h1>
            <CategoriesWrapper>
              {data.allContentfulWork.edges.map(({node}) => (
                <div key={node.id}>
                  <img src={node.featuredImage.url} width="400" alt={node.featuredImage.url.title} />
                  <h2>{node.title}</h2>
                  <p>{node.description.description}</p>
                  <Link to={`/portfolio/${node.slug}/`}>Details</Link>
                  <p>{node.projectCategory}</p>
                  <a href={node.link} target="_blank" rel="noreferrer">{node.title}</a>
                </div>
              ))}
            </CategoriesWrapper>
      </Layout>
    </main>
  )
}

export default CategoriesPage

export const Head = () => <title>Categories</title>

// Graphql Query
export const CategoriesPageQuery = graphql `
  query MyQuery($projectCategory: String) {
  allContentfulWork(filter: {projectCategory: {eq: $projectCategory}}) {
    edges {
      node {
        title
        slug
        description {
          description
        }
        projectCategory
        featuredImage {
          gatsbyImage(formats: WEBP, width: 800, outputPixelDensities: [1, 1])
        }
      }
    }
  }
}
`;