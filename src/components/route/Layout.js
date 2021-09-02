import React from "react"
import Footer from "../layouts/Footer"
import Sidebar from "../layouts/Sidebar"
import Title from "../layouts/Title"

function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div id="main">
        <div className="page-heading">
          <Title />
          <section className="section">
            <div className="card">
              <div className="card-body">{children}</div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
