import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Intro from "../components/intro"

const Layout = (props) => {
    const { location, title, children } = props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div class="internalBody">
        <Navigation/>
        <main>
          <aside>
            <Intro/>
          </aside>{/* {children} */}
          <section class="contentArea">
            {children}
          </section>
        </main>
        <Footer/>
      </div>
    )
}

export default Layout
