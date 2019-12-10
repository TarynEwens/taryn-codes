import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const CategoryTemplate = (props) => {
  const {
    title,
    postPrefix,
  } = props.data.site.siteMetadata;
  const posts = props.data.allWordpressPost.edges;

  return (
    <Layout location={props.location} title={title}>
      <SEO
        title={`Archive | ${props.pageContext.name}`}
        description={`Archive for ${props.pageContext.name} category`}
      />
      <h1>Archive | {props.pageContext.name}</h1>
        <div className="blog">
          <h2>Articles and Notes</h2>
          <p>Just things from my brain that I like to write down.</p>
          <h3>Filter by category: </h3>
          <ul className="blog__categories">
            <li><a href="/blog">All</a></li>
            <li><a href="/category/coding">Coding</a></li>
            <li><a href="/category/diversity-and-inclusion">Diversity and Inclusion</a></li>
          </ul>
          <hr/>
        </div>
        {posts.map(({ node }) => {
          return (
            <div key={node.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
              <Link style={{ boxShadow: `none` }} to={`${postPrefix}/${node.slug}`}>
                  {node.title}
                </Link>
              </h3>
              <small>{node.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
              />
            </div>
          )
        })}
        <hr/>
      <div>
        <h2>My writing on other sites</h2>
        <ul className="blog__externalList">
          <li><a href="https://medium.com/finder-tech/imposter-syndrome-all-the-way-up-9d90753ad38c" rel="noopener noreferrer" target="_blank">Imposter syndrome all the way up</a></li>
          <li><a href="https://medium.com/finder-tech/analysing-our-engineering-teams-key-values-e9f79dd4391e" rel="noopener noreferrer" target="_blank">Analysing our engineering teams key values</a></li>
        </ul>
      </div>
    </Layout>
  )
}

export default CategoryTemplate;

export const pageQuery = graphql`
query category($slug: String) {
  site {
    siteMetadata {
      title
      author
      postPrefix
    }
  }
  allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
    edges {
      node {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        modified
        excerpt
        id
        categories {
          name
          id
          slug
        }
        content
      }
    }
  }
}
`
