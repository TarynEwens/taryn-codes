import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const InstagramLinks = (props) => {
  const {
    title,
  } = props.data.site.siteMetadata;
  const page = props.data.wordpressPage;

  return (
    <Layout location={props.location} title={title}>
      <SEO title={page.title} />
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{__html: page.content}}></div>
    </Layout>
  )
}

export default InstagramLinks

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        postPrefix
      }
    }
    wordpressPage(id: { eq: "4a88722b-cbdd-5586-8857-4a611234f234" }) {
      title
      content
    }
  }
`
