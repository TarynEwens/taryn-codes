/**
 * Footer component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const Footer = (props) => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        return (
          <footer>
            Designed and built by Taryn Ewens | an experiment with 
            <a href="https://www.gatsbyjs.org"> Gatsby</a>
            | © {new Date().getFullYear()}
          </footer>
        )
      }}
    />
  )
}

const footerQuery = graphql`
  query FooterQuery {
    avatar: file(absolutePath: { regex: "/css-taryn.png/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Footer
