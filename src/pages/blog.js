import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalWriting from '../components/externalWriting'

const BlogIndex = (props) => {
  const {
    title,
    postPrefix,
  } = props.data.site.siteMetadata;
  const posts = props.data.allWordpressPost.edges;

  return (
    <Layout location={props.location} title={title}>
      <SEO title="All posts" />
      <section className="blog">
        <h1>Articles and Notes</h1>
        <p>Just things from my brain that I like to write down.</p>
        <h2 class="blog__filters">Filter by category: </h2>
        <ul className="blog__categories">
          <li><a href="/blog">All</a></li>
          <li><a href="/category/coding">Coding</a></li>
          <li><a href="/category/diversity-and-inclusion">Diversity and Inclusion</a></li>
        </ul>
        <hr/>
      </section>
      <section>
        <ul className="blogList">
        {posts.slice(0).map(({ node }) => {
          return (
            <li key={node.slug}>
            <Link style={{ boxShadow: `none` }} to={`${postPrefix}/${node.slug}`}>
                {node.title}
              </Link>
              <small>{node.date}</small>
            </li>
          )
        })}
        </ul>
      </section>
      <hr/>
      <ExternalWriting/>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        postPrefix
      }
    }
    allWordpressPost(
       filter: {
         fields: {
           deploy: {eq: true}
         }
       }
        limit: 100
      ) {
      edges {
        node {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          excerpt
          id
          categories {
            name
          }
        }
      }
    }
  }
`
