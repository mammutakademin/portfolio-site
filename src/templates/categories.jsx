import * as React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const ProjectsListWrapper = styled.div`
    width: 80%;
    margin: 20px 20px;
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
  padding-bottom: 20px;
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

const CategoriesPage = ({ data }) => {

  return (
    <main>
      <Layout>
        <h1>Categories</h1>
          <ProjectsListWrapper>
              {data.allContentfulWork.edges.map(({node}) => (
                <ProjectDetailContainer>
                <div key={node.id}>
                  {/* <GatsbyImage image={node.featuredImage.url} alt={node.featuredImage.url.title} /> */}

                  <img src={node.featuredImage.gatsbyImage.images.fallback.src} weight={300} alt={node.title} />
                  <h3><a href={node.link} target="_blank" rel="noreferrer">{node.title}</a></h3>
                  <p>{node.description.description}</p>
                  <p><Link to={`/category/${node.skill.title}/`}>{node.skill.title}</Link></p>
                  <p><Link to={`/portfolio/${node.slug}/`}>Details</Link></p>
                </div>
                </ProjectDetailContainer>
              ))}
             </ProjectsListWrapper>
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
            gatsbyImage(formats: WEBP, width: 300, outputPixelDensities: [1, 1])
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