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


          <nav id="navigation" className="header__nav">
            {/* <button aria-expanded="false" aria-controls="menu">
              <svg id="i-menu" aria-label="Menu" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.25%">
                <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path>
              </svg>
            </button> */}

            <ul id="menu">
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
          </nav>
          </header>
        )
      }}
    />
  )
}

// const toggleMenu = document.querySelector(".header__nav > button");
// console.log(toggleMenu);
// const menu = document.querySelector(".header__nav > ul");


// toggleMenu.addEventListener("click", function () {
//   const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
//   toggleMenu.setAttribute("aria-expanded", !open);
//   menu.hidden = !menu.hidden;
// });

const navigationQuery = graphql`
  query NavigationQuery {
    avatar: file(absolutePath: { regex: "/icons/css-taryn.png/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Navigation
