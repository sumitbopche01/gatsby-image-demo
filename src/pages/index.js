import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import travelImg from "../images/travel.jpg"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Img
        fluid={data.travelImage.childImageSharp.fluid}
        alt="travel somewhere"
      />
    </p>
    <p>
      <Img
        fluid={data.travel2Image.childImageSharp.fluid}
        alt="travel somewhere"
      />
    </p>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    travelImage: file(relativePath: { eq: "travel.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    travel2Image: file(relativePath: { eq: "travel2.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
