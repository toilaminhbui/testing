import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const onHandleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }
  const notify = () =>
    toast.error("Username or password incorrect", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  return (
    <div id="auth">
      {/* Same as */}
      <ToastContainer />
      <div className="col-md-4 col-12 custom-login">
        <div className="card">
          <div className="card-header">
            <h1 class="auth-title text-center">Login.</h1>
          </div>

          <div className="card-content">
            <div className="card-body">
              <form autoComplete="off">
                <div className="form-group position-relative has-icon-left mb-4">
                  <input
                    onChange={onHandleChange}
                    type="text"
                    className="form-control form-control-xl"
                    placeholder="Username"
                    name="username"
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-person" />
                  </div>
                </div>
                <div className="form-group position-relative has-icon-left mb-4">
                  <input
                    onChange={onHandleChange}
                    type="password"
                    className="form-control form-control-xl"
                    placeholder="Password"
                    name="password"
                  />

                  <div className="form-control-icon">
                    <i className="bi bi-shield-lock" />
                  </div>
                </div>
                <div className="invalid-feedback">
                  <i className="bx bx-radio-circle" />
                  This is invalid state.
                </div>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault()
                    notify()
                  }}
                  className="btn btn-primary btn-block btn-lg shadow-lg d-flex justify-content-center align-items-center mt-2"
                >
                  {/* <span
                    className="spinner-border spinner-border-lg"
                    role="status"
                    aria-hidden="true"
                  /> */}
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
