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
          <header>
          <div className="header__logo"
          >
            <Link
              to={`/`}
            >
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={'Cartoon avatar of Taryn Ewens'}
              />
            </Link>
            <Link
              to={`/`}
              className={"header__logoText"}
            >
              Taryn<span>.Codes</span>
            </Link>
          </div>

          <nav className="header__nav">
            <Link
              to={`/about`}
            >
              About
            </Link>
            <Link
              to={`/projets`}
            >
              Projects
            </Link>
            <Link
              to={`/writing`}
            >
              Writing
            </Link>
            <Link
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
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Navigation
