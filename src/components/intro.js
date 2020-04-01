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
          <section className="intro">
            <div>
              <h1>Front-End Web Developer,</h1>
              <h2>CSS fan, design enthusiast, and doggo lover.</h2>
              <p>My name is Taryn and I’m an ex-confectioner turned web developer in Sydney, Australia. I love creating art with CSS and dabbling in design, but I'm most passionate about accessibility and diversity in the tech industry.</p>
              <div className="intro__ctaGroup">
                <a href="/about/" className="ctaLink">Learn more about me &rarr;</a>
                <a href="/blog/" className="ctaLink">Check out my writing &rarr;</a>
              </div>
            </div>
            <aside>
              <img src="https://tarynewens.com/portfolio/wp-content/uploads/2020/04/Webp.net-resizeimage-1.jpg" alt="Taryn smiling at the camera while sitting at her home office desk with monitor, laptop on stand, pink keyboard and small pot plants."/>
              <img src="https://tarynewens.com/portfolio/wp-content/uploads/2019/12/speaking-thanks.jpg" alt="Taryn finishing a talk at SydCSS with her hands in the air and 'Thanks!' on the screen behind"/>
            </aside>
          </section>

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
