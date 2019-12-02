import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Intro from "../components/intro"

const Layout = (props) => {
    const { location, title, children } = props
    const rootPath = `${__PATH_PREFIX__}/`

    let pageClass = 'otherPage';

    if (location.pathname === '/') {
      pageClass = 'homePage';
    } else {
      pageClass = 'otherPage';
    }

    return (
      <div className="internalBody">
        <Navigation/>
        <main className={ pageClass }>
          <aside>
            <Intro/>
          </aside>
          <section id="contentArea" className="contentArea">
            {children}
          </section>
        </main>
        <Footer/>
      </div>
    )
}

export default Layout
