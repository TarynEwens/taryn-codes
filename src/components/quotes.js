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

      "I love a good implode()",

      "Full stack yo!",

      "If I were a hacker I'd fill horrible peoples websites with clown emojis.",

      "console.log('is this where the error is?');",

      "Me this morning: I'm going to stop work at 4.30 and smash out a couple of Javascript30's. Me now: error error error error error error error error",

      "I just described my outfit as metro lumberjack vibes with a touch of Williams Wish Wellingtons",

      "It's like the dev gods were like 'just cause you're an engineer now, don't get a big head - the first deployment you do will break production!'",

      "I ate so many dumplings for lunch I feel like I am a dumpling now.",

      "Me: 'It's not time yet I'm still working'. Lexi: 'arooorooooooo'. Me: 'No Lexi, be patient'. Lexi: 'arrooo'.",

      "If TypeScript was an object I'd have thrown it in the bin by now",

      "Ejecting create react app isn't quite like painting a landscape...",
    ]

    let n = Math.floor(Math.random() * quotes.length);
    return quotes[n];
  }

  return (
    <div className="footer__quotesWrapper">
      <blockquote class="footer__quotes">
        <p>"{quoteOfTheDay}"</p>
        <p>- Taryn</p>
      </blockquote>
    </div>
  )
}


export default Quotes
