import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Experience = (props) => {
  const {
    title,
  } = props.data.site.siteMetadata;
  const page = props.data.wordpressPage;

  return (
    <Layout location={props.location} title={title}>
      <SEO title={page.title} />
      <div dangerouslySetInnerHTML={{__html: page.content}} class="experience"></div>
    </Layout>
  )
}

export default Experience

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        postPrefix
      }
    }
    wordpressPage(id: { eq: "5734a220-5a94-573c-b242-1f94cfe767d7" }) {
      title
      content
    }
  }
`
