import * as React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Main = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
  text-align: center;
`

const ContactMePage = ({ data }) => {

  return (
    <Layout>
        <Main>
            <h1>{data.contentfulContact.title}</h1>
            <img src={data.contentfulContact.featuredImage.resize.src} alt={data.contentfulContact.title} />
            <br />
            <a href={`mailto:${data.contentfulContact.emailAddress}`}>Email</a>
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
                resize(format: JPG, width: 200) {
                    width
                    src
                }
                url
            }
            githubAccount
            linkedInAccount
            website
            emailAddress
        }
    }
`;