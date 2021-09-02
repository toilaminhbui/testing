import React, { useEffect, useState } from "react"
import { Pagination } from "antd"
import Loading from "../Loading"
import ItemListPost from "./ItemListPost"
import PaginationPost from "./PaginationPost"
import axios from "axios"

function ListPost() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [listPost, setListPost] = useState([])
  const [loading, setLoading] = useState(false)
  console.log("list post")
  // useEffect(() => {
  //   setLoading(true)
  //   axios
  //     .get(`https://buivanminh.glitch.me/post?_page=1`)
  //     .then((res) => {
  //       console.log("kiem tra chieu dai")
  //       setTotalPage(Math.ceil(res.data.total / 5))
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://bvm-it.tk/api/post?_page=${currentPage}`)
      .then((res) => {
        setLoading(false)
        console.log("data", res.data.data)
        if (totalPage === 0) {
          setTotalPage(Math.ceil(res.data.total / 5))
        }
        setListPost(res.data.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }, [currentPage])
  return (
    <>
      <section className="section">
        {loading ? (
          <Loading />
        ) : (
          <div className="row" id="table-bordered">
            <div className="col-12">
              <div className="card">
                <div className="card-header-custom">
                  <a href="#" className="btn btn-primary rounded-pill">
                    Add Post
                  </a>
                </div>
                <div className="card-content">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>TITLE</th>
                          <th>DESCRIPTION</th>
                          <th>CATEGORY</th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listPost.map((value, index) => {
                          return (
                            <ItemListPost
                              id={value._id}
                              title={value.title.substr(0, 20)}
                              description={value.description.substr(0, 90)}
                            />
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <nav>
          <PaginationPost
            loading={loading}
            totalPage={totalPage}
            setCurrentPage={setCurrentPage}
          />
        </nav>
      </section>
    </>
  )
}

export default ListPost
