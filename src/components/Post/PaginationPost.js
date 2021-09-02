import React, { useEffect, useState } from "react"

function PaginationPost({ loading, totalPage, setCurrentPage }) {
  // const totalPage = 10
  const arrAllPage = []
  for (let i = 1; i <= totalPage; i++) {
    arrAllPage.push(i)
  }
  const [currentButton, setCurrentButton] = useState(1)
  const [arrButton, setArrButton] = useState([])
  useEffect(() => {
    const dotLeft = "--- "
    const dotRight = " ---"
    if (totalPage < 6) {
      setArrButton([...arrAllPage])
    } else if (currentButton <= 3 && currentButton >= 1) {
      setArrButton([1, 2, 3, 4, dotRight, totalPage])
    } else if (currentButton >= 4 && currentButton < totalPage - 2) {
      const arrNumberCenter = arrAllPage.slice(
        currentButton - 2,
        currentButton + 1
      )
      setArrButton([1, dotLeft, ...arrNumberCenter, dotRight, totalPage])
    } else if (currentButton >= totalPage - 2) {
      const arrNumberRight = arrAllPage.slice(totalPage - 4, totalPage)
      setArrButton([1, dotLeft, ...arrNumberRight])
    } else if (currentButton === dotLeft) {
      setCurrentButton(arrButton[3] - 2)
      return setCurrentPage(arrButton[3] - 2)
    } else if (currentButton === dotRight) {
      setCurrentButton(arrButton[3] + 2)
      return setCurrentPage(arrButton[3] + 2)
    }
    console.log("current page", currentButton)
    setCurrentPage(currentButton)
  }, [currentButton, totalPage])
  return (
    <>
      {!loading && (
        <ul className="pagination pagination-primary  justify-content-center">
          <li className="page-item">
            <button
              disabled={currentButton <= 1}
              onClick={() => {
                setCurrentButton(currentButton - 1)
              }}
              className="page-link"
              href="#"
            >
              Prev
            </button>
          </li>
          {/* <li className="page-item">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item active">
        <a className="page-link" href="#">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          3
        </a>
      </li> */}
          {arrButton.map((value, index) => {
            return (
              <li
                key={index}
                className={
                  currentButton === value ? "page-item active" : "page-item"
                }
              >
                <button
                  onClick={() => {
                    setCurrentButton(value)
                  }}
                  className="page-link"
                >
                  {value}
                </button>
              </li>
            )
          })}
          <li className="page-item">
            <button
              disabled={currentButton >= totalPage}
              onClick={() => {
                setCurrentButton(currentButton + 1)
              }}
              className="page-link"
              href="#"
            >
              Next
            </button>
          </li>
        </ul>
      )}
    </>
  )
}

export default PaginationPost
