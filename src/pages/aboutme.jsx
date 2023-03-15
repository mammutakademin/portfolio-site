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
  
  @media only screen and (max-width: 700px) {
    max-width: 500px;
    padding: 0 2rem;
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
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

export const Head = () => (
      <>
            <title>About Me Page</title>
            <meta name="description" content="A page about me" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </>
)

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