import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const SingleWorkPage = ({ data }) => {
  
    const work = data.contentfulWork

    return (
        <Layout>
            <h1>{work.title}</h1>
            <img src={work.featuredImage.url} width={900} alt={work.title} />
            <p>{work.description.description}</p>
            <a href={work.link} target="_blank" rel="noreferrer">See it live</a>
            <p>{work.projectCategory}</p>
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