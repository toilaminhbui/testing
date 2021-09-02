import React from "react"
import { Link, Route, useRouteMatch } from "react-router-dom"

const LinkCustom = ({ to, activeOnlyWhenExact, children }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={match ? "sidebar-item active" : "sidebar-item"}>
          <Link className="sidebar-link" to={to}>
            {children}
          </Link>
        </li>
      )}
    />
  )
}

function Sidebar() {
  return (
    <div id="sidebar" className="active">
      <div className="sidebar-wrapper active">
        <div className="sidebar-menu">
          <ul className="menu">
            <li className="sidebar-title">Menu</li>
            <LinkCustom to="/home">
              <i className="bi bi-house-fill"></i>
              <span>Home</span>
            </LinkCustom>
            <LinkCustom to="/post">
              <i className="bi bi-pen-fill" />
              <span>Post</span>
            </LinkCustom>
            <LinkCustom to="/category">
              <i className="bi bi-file-earmark-spreadsheet-fill" />
              <span>Category</span>
            </LinkCustom>
            <li className="sidebar-title">Account</li>
            <LinkCustom to="/profile">
              <i className="bi bi-person-fill" />
              <span>Profile</span>
            </LinkCustom>
            <LinkCustom to="/logout">
              <i className="bi bi-arrow-right-circle-fill" />
              <span>Logout</span>
            </LinkCustom>
          </ul>
        </div>
        <button className="sidebar-toggler btn x">
          <i data-feather="x" />
        </button>
      </div>
    </div>
  )
}

export default Sidebar
