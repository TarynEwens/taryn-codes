import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = (props) => {
  const {
    title,
  } = props.data.site.siteMetadata;
  const page = props.data.wordpressPage;

  return (
    <Layout location={props.location} title={title}>
      <SEO title={page.title} />
      <div dangerouslySetInnerHTML={{__html: page.content}} class="contact"></div>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        postPrefix
      }
    }
    wordpressPage(id: { eq: "012929af-78e8-5015-a26e-def8d16fd5ee" }) {
      title
      content
    }
  }
`
