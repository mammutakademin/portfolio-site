import * as React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const ProjectsListWrapper = styled.div`
    width: 80%;
    margin: 10px 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Categories = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  justify-content: center;
  gap: 2rem;
`

const ProjectDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 45px 10px;
  width: 400px;
  height: 200px;
  padding-bottom: 60px;
  text-align: center;
  img {
    margin-bottom: 20px;
  }
  p {
    font-size: 1rem;
    margin: 0;
    color: rgb(20, 21, 23);
    // text-transform: uppercase;
  }
  a {
    text-decoration: none;
    color: rgb(32, 29, 30);
    &:hover {
      color: rgb(115, 95, 82);
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
            {/* <GatsbyImage image={node.featuredImage.url} alt={node.featuredImage.url.title} /> */}

              <img src={node.featuredImage.url} width="300" alt={node.featuredImage.url.title} />
              <h3><a href={node.link} target="_blank" rel="noreferrer">{node.title}</a></h3>
              <p>{node.description.description}</p>
              {/* <p>{node.projectCategory}</p> */}
              <Link to={`/category/${node.skill.title}/`}>{node.skill.title}</Link>
              <Link to={`/portfolio/${node.slug}/`}>Details</Link>
            </ProjectDetailContainer>
          ))}
          </ProjectsListWrapper>
      </Layout>
  )
}

export default PortfolioPage

export const Head = () => (
    <>
        <title>Portfolio</title>
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