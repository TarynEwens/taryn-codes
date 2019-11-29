/**
 * Top navigation component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Navigation = (props) => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <StaticQuery
      query={navigationQuery}
      render={data => {
        return (
          <header
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
            className="header__logo"
          >
          <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={`Cartoon avatar of Taryn Ewens`}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              Taryn.Codes
            </Link>
          </div>

          <nav
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
            className="header__nav"
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/about`}
            >
              About
            </Link>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/projets`}
            >
              Projects
            </Link>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/art`}
            >
              Art
            </Link>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/writing`}
            >
              Writing
            </Link>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/contact`}
            >
              Contact
            </Link>
          </nav>
            
            
          </header>
        )
      }}
    />
  )
}

const navigationQuery = graphql`
  query NavigationQuery {
    avatar: file(absolutePath: { regex: "/css-taryn.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Navigation
