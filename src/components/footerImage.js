/**
 * Quotes component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const FooterImage = (props) => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let imageOfThePage = pickImage();
  let linkUrl = imageOfThePage.link;
  let src = imageOfThePage.src;
  let alt = imageOfThePage.alt;

  function pickImage() {
    let images = [
      {
        link: 'https://codepen.io/tarynewens/pen/KbeNYX',
        src: 'https://tarynewens.com/portfolio/wp-content/uploads/2019/12/gelato.png',
        alt: "CSS image of a gelato cone with happy faces"
      },
      {
        link: 'https://codepen.io/tarynewens/pen/RzgOgG',
        src: 'https://tarynewens.com/portfolio/wp-content/uploads/2019/12/macarons.png',
        alt: "CSS image of 3 macarons with happy faces"
      },
      {
        link: 'https://codepen.io/tarynewens/pen/OKbWKy',
        src: 'https://tarynewens.com/portfolio/wp-content/uploads/2019/12/plant1.png',
        alt: "CSS image of a plant in a pink pot"
      },
      {
        link: 'https://codepen.io/tarynewens/pen/rEqONM',
        src: 'https://tarynewens.com/portfolio/wp-content/uploads/2019/12/plant2.png',
        alt: "CSS image of a plant in a pink pot"
      },
      {
        link: 'https://codepen.io/tarynewens/pen/WmwgJR',
        src: 'https://tarynewens.com/portfolio/wp-content/uploads/2019/12/pig.png',
        alt: "CSS image of a geometric pig"
      },
      {
        link: 'https://codepen.io/tarynewens/pen/WPgwZO',
        src: 'https://tarynewens.com/portfolio/wp-content/uploads/2019/12/heart.png',
        alt: "CSS image of a geometric heart"
      }
    ]

    let n = Math.floor(Math.random() * images.length);
    return images[n];
  }

  console.log(imageOfThePage);
  console.log(typeof src);
  console.log(alt);

  return (
    <div className="footer__image" >
      <a href={ linkUrl } rel="noopener noreferrer" target="_blank"><img src={ src } alt={ alt }></img></a>
    </div>
  )
}


export default FooterImage

const footerImageQuery = graphql`
  query FooterImageQuery {
    avatar: file(absolutePath: { regex: "/images/plant1.png/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`