import * as React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

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
const CategoriesPage = ({ data }) => {

  return (
    <main>
      <Layout>
        <h1>Categories</h1>
            <CategoriesWrapper>
              {data.allContentfulWork.edges.map(({node}) => (
                <div key={node.id}>
                  <Link to={`/category/${node.skill.title}/`}>{node.skill.title}</Link>
            {/* <GatsbyImage image={node.featuredImage.url} alt={node.featuredImage.url.title} /> */}
            <img src={node.featuredImage.url} width="300" alt={node.featuredImage.url.title} />

                  {/* <img src={node.featuredImage.gatsbyImage.images.fallback.src} weight={300} alt={node.title} /> */}
                  <h3><a href={node.link} target="_blank" rel="noreferrer">{node.title}</a></h3>
                  <p>{node.description.description}</p>
                  <p><Link to={`/portfolio/${node.slug}/`}>Details</Link></p>
                  <p><Link to={`/category/${node.skill.title}/`}>{node.skill.title}</Link></p>
                </div>
              ))}
            </CategoriesWrapper>
      </Layout>
    </main>
  )
}

export default CategoriesPage

export const Head = () => <title>Categories</title>

export const query = graphql`
  query CategoriesPageQuery($skill: String!) {
    allContentfulWork(filter: {projectCategory: {eq: $skill}}) {
      edges {
        node {
          slug
          title
          link
          featuredImage {
            url
          }
          description {
            description
          }
          projectCategory
          skill {
            title
          }
        }
      }
    }
  }
`