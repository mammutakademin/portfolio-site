import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Main = styled.main`
  // color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 2rem;
  text-align: center;
  h1 {
    font-size: 64px;
    margin: 10% 0 0 0;
    color: white;
  }
  // p {
  //   font-size: 18px;
  // }
  a {
    text-decoration: none;
    color: rgb(32, 29, 30);
  }
  .hero-image {
    width: 70%;
    height: auto;
    object-fit: cover;
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

export const Head = () => <title>Single Work Page</title>

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