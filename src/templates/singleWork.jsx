import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

const SingleWorkPage = ({ data }) => {
    const work = data.contentfulWork

    return (
        <main>
            <Link to="/">Home</Link>
            <Link to="/portfolio/">Portfolio</Link>
            <h1>{work.title}</h1>
            <img src={work.featuredImage.url} alt="featured work" />
            <p>{work.description.description}</p>
        </main>
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
    }
  }
`