import React from "react"
import { Link } from "react-router-dom"
import "./NotFound.css"

function NotFound() {
  return (
    <div id="error">
      <div className="error-page container">
        <div className="col-md-8 col-12 offset-md-2">
          <img
            className="img-error"
            src="https://i.ibb.co/JrjfCZb/error-404.png"
            alt="Not Found"
          />
          <div className="text-center">
            <p className="fs-5 text-gray-600">
              THE PAGE YOU ARE LOOKING NOT FOUND.
            </p>
            <Link to="/home" className="btn btn-lg btn-outline-primary mt-3">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
