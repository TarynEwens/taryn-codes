/**
 * Top navigation component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const Navigation = (props) => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <StaticQuery
      query={navigationQuery}
      render={data => {
        return (
          <header class="content">
          <div className="header__logo"
          >
            <Link
              to={`/`}
              className={"header__logoText"}
              aria-label={"Taryn.Codes"}
            >
              Taryn
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={'Cartoon avatar of Taryn Ewens'}
              />
              Codes
            </Link>
          </div>


          <nav id="navigation" className="header__nav">
            <div class="navSeparator"></div>
            <ul id="menu">
            <li>
                <Link
                to={`/`}
              >
                Home
              </Link>
              </li>
              <li>
                <Link
                to={`/about`}
              >
                About
              </Link>
              </li>
              <li>
                <Link
                to={`/blog`}
                >
                Writing
              </Link>
              </li>
              <li>
                <Link
                to={`/contact`}
                >
                Contact
                </Link>
              </li>
            </ul>
            <div class="navSeparator"></div>
          </nav>
          </header>
        )
      }}
    />
  )
}

const navigationQuery = graphql`
  query NavigationQuery {
    avatar: file(absolutePath: { regex: "/icons/css-taryn.png/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Navigation
