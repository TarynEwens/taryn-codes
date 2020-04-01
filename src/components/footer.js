/**
 * Footer component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Quotes from "../components/quotes"
import FooterImage from "../components/footerImage"

const Footer = (props) => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        return (
          <footer className="content">
            <FooterImage/>
            <div className="footer__fullWidth">
              <div className="footer__left">
                <Quotes/>
              </div>
              <div className="footer__right">
                <nav className="footer__nav">
                  <ul>
                    <li><a href="https://twitter.com/TarynEwens">Twitter</a></li>
                    <li><a href="https://www.instagram.com/taryn.codes/">Instagram</a></li>
                    <li><a href="https://github.com/tarynelise">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/tarynewens/">LinkedIn</a></li>
                    <li><a href="https://codepen.io/tarynewens">CodePen</a></li>
                  </ul>
                </nav>
                <div className="footer__copyright">
                  Designed and built by Taryn Ewens - an experiment with <a href="https://www.gatsbyjs.org">Gatsby</a>
                  | © {new Date().getFullYear()}
                </div>
              </div>
            </div>
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
