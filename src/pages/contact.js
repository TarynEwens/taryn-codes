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
      <div dangerouslySetInnerHTML={{__html: page.content}} className="contact"></div>
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
    wordpressPage(id: { eq: "bcd89a76-4c61-53ce-bc47-33ac25c99b97" }) {
      title
      content
    }
  }
`
