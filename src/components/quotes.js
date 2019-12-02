/**
 * Quotes component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const Quotes = (props) => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let quoteOfTheDay = pickQuote();

  function pickQuote() {
    let quotes = [
      "Instead of a justify-content center, or flex-end... I need a justify-content: flex-slightly-past-two-thirds.",

      "I'm just throwing var dumps around and trying to understand php.",

      "I think I var_dumped my way to success!",

      "I think I'll be okay once I sort out all of my rounded fellas and curly fellas ) } ",

      "It just gets used in a construct thingy.",

      "Now I'm having inspiration for my portfolio site and having design regrets... like food regret, but design regret.",

      "I'm so hungry I couldn't stop eating wasabi peas and now my mouth is on fire.",

      "Some days I really wish you could traverse up the DOM in CSS.",

      "Me: Why is my JavaScript not working? Also me: using PHP syntax",

      "My jQuery is so complex it disgusts me.",
    ]

    let n = Math.floor(Math.random() * quotes.length);
    return quotes[n];
  }

  return (
    <div className="footer__quotes">
      <h3>Taryn's quote of the page:</h3>
      <p>"{quoteOfTheDay}"</p>
    </div>
  )
}


export default Quotes
