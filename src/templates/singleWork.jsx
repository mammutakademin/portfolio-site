import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 2rem;
  text-align: center;
  
  .hero-image {
    width: 70%;
    height: auto;
    object-fit: cover;
  }
  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
`

const SingleWorkPage = ({ data }) => {
    const work = data.contentfulWork

    return (
        <Layout>
          <Main>
            <h1>{work.title}</h1>
            <img className="hero-image" src={work.featuredImage.url} width={400} alt={work.title} />
            <p>{work.description.description}</p>
            <p><a href={work.link} target="_blank" rel="noreferrer">See it live</a></p>
            <p>{work.projectCategory}</p>
          </Main>
        </Layout>
    )
}

export default SingleWorkPage

export const Head = ({ data }) => (
  <>
    <title>Single Work Page</title>
    <meta name={data.contentfulWork.title} content={data.contentfulWork.description.description} />
  </>
) 

export const query = graphql`
  query SingleWorkQuery($slug: String) {
    contentfulWork(slug: {eq: $slug}) {
      title
      featuredImage {
        url
      }
      link
      description {
        description
      }
      projectCategory
    }
  }
`