import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

const Layout = (props) => {
    const { location, title, children } = props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className="internalBody">
        <Navigation/>
        <main id="contentArea" className="content contentArea">
            {children}
        </main>
        <Footer/>
      </div>
    )
}

export default Layout
