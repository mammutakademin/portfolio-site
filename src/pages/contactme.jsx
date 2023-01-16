import * as React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"

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

const ContactMePage = ({ data }) => {

  return (
    <Layout>
        <Main>
            <h1>{data.contentfulContact.title}</h1>
            <img src={data.contentfulContact.featuredImage.resize.src} alt={data.contentfulContact.title} />
        
            <p><a href={`mailto:${data.contentfulContact.emailAddress}`}>Email</a></p>
            <a href={data.contentfulContact.githubAccount} target="_blank" rel="noreferrer">Github</a>
            <a href={data.contentfulContact.linkedInAccount} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={data.contentfulContact.website} target="_blank" rel="noreferrer">Website</a>
        </Main>
    </Layout>
  )
}

export default ContactMePage

export const Head = () => <title>Contact Me Page</title>

// Graphql Query
export const AboutMePageQuery = graphql `
    query MyQuery {
        contentfulContact {
            title
            featuredImage {
                resize(format: JPG, height: 300) {
                    height
                    src
            }
            }
            githubAccount
            linkedInAccount
            website
            emailAddress
        }
    }
`;