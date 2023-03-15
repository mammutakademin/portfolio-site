import * as React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const ProjectsListWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const ProjectDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: auto;
  margin: 0 40px;
  text-align: center;
  padding-bottom: 60px;
  img {
    margin-bottom: 20px;
  }
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

const PortfolioPage = ({ data }) => {
  
  return (
    <Layout>
        <h1>Projects</h1>
        <ProjectsListWrapper>
        {data.allContentfulWork.edges.map(({ node }) => (
          <ProjectDetailContainer>
              <h3><a href={node.link} target="_blank" rel="noreferrer">{node.title}</a></h3>
              <img src={node.featuredImage.url} alt={node.featuredImage.url.title} />
              <span><Link className="details-wrapper" to={`/category/${node.skill.title}/`}>{node.skill.title}</Link><Link className="details-wrapper" to={`/portfolio/${node.slug}/`}>Details</Link></span>
              <p>{node.description.description}</p>
            </ProjectDetailContainer>
          ))}
          </ProjectsListWrapper>
      </Layout>
  )
}

export default PortfolioPage

export const Head = () => (
    <>
        <title>Portfolio Page</title>
        <meta name="description" content="Showcase of my projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
)

// Graphql Query
export const PortfolioPageQuery = graphql `
query myQuery {
  allContentfulWork(sort: {title: ASC}) {
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
`;