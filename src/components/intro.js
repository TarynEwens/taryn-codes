/**
 * Intro component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const Intro = (props) => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <StaticQuery
      query={introQuery}
      render={data => {
        return (
          <div class="intro">
            <h1>Front-End<br/>Web Developer,</h1>
            <h2>CSS fan, design enthusiast,<br/>and fluffy doggo lover.</h2>
            <p>My name is Taryn and I’m an ex-confectioner turned web developer in Sydney, Australia. I love creating art with CSS and dabbling in design, but I'm most passionate about accessibility and diversity in the tech industry.</p>
            <div class="intro__buttonGroup">
              <Link to="/aboutme/" class="intro__button intro__buttonPrimary">Learn more about me</Link>
              <Link to="/writing/" class="intro__button intro__buttonSecondary">Check out my writing</Link>
            </div>
          </div>
        )
      }}
    />
  )
}

const introQuery = graphql`
  query IntroQuery {
    avatar: file(absolutePath: { regex: "/icons/css-taryn.png/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Intro
