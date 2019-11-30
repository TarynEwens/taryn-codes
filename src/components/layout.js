import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

const Layout = (props) => {
    const { location, title, children } = props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div>
        <Navigation/>
        <main>{children}</main>
        <Footer/>
      </div>
    )
}

export default Layout
