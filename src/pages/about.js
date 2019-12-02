import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = (props) => {
  const {
    title,
  } = props.data.site.siteMetadata;
  const page = props.data.wordpressPage;

  return (
    <Layout location={props.location} title={title}>
      <SEO title={page.title} />
      <div dangerouslySetInnerHTML={{__html: page.content}} className="about"></div>
      <Link
        to={`/experience#contentArea`}
        className={"button button__primary button__primary--about"}
      >
        View my resume
      </Link>
    </Layout>
  )
}

export default AboutMe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        postPrefix
      }
    }
    wordpressPage(id: { eq: "250cbabc-ade4-5c5a-9b34-208fc70f3f83" }) {
      title
      content
    }
  }
`
