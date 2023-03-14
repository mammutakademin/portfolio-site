import * as React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"

const AboutMeWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  h2 {
    /* font-size: 36px; */
    color: whitesmoke;
  }
  @media (max-width: 1080px) {
    max-width: 500px;
    padding: 0 2rem;
  }
  `

const AboutMePage = ({ data }) => {

  return (
    <Layout>
        <AboutMeWrapper>
            <h1>{data.contentfulAboutMe.title}</h1>
            <br />
            <p>{data.contentfulAboutMe.presentationText.presentationText}</p>
            <br />
            <h2>Work Experience</h2><p>{renderRichText(data.contentfulAboutMe.workExperience)}</p>
            <br />
            <h2>Education</h2>{renderRichText(data.contentfulAboutMe.educationalAttainment)}
        </AboutMeWrapper>
    </Layout>
  )
}

export default AboutMePage

export const Head = () => <title>About Me Page</title>

// Graphql Query
export const AboutMePageQuery = graphql `
    query MyQuery {
        contentfulAboutMe {
            title
            presentationText {
                presentationText
            }
            educationalAttainment {
                raw
            }
            workExperience {
                raw
            }
        }
    }
`;