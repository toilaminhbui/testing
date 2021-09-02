import React from "react"

function Title() {
  return (
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Post</h3>
        </div>
        <div className="col-12 col-md-6 order-md-2 order-first">
          <nav
            aria-label="breadcrumb"
            className="breadcrumb-header float-start float-lg-end"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Post</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                List Post
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Title
