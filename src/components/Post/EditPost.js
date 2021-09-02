import axios from "axios"
import React, { useEffect, useState } from "react"
import { Redirect, useParams, useHistory } from "react-router-dom"
import Loading from "../Loading"

function EditPost() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [loadEdit, setLoadEdit] = useState([])
  const [error, setError] = useState(false)
  const history = useHistory()
  useEffect(() => {
    if (id) {
      setLoading(true)
      axios
        .get(`https://buivanminh.glitch.me/post/${id}`)
        .then((res) => {
          setLoading(false)
          console.log("data", res.data.data)
          setLoadEdit(res.data.data[0])
        })
        .catch((err) => {
          setLoading(false)
          if (err.response.data.err.kind === "ObjectId") {
            setError(true)
          }
          console.log(err.response.data)
        })
    }
  }, [])
  console.log(loadEdit)
  return (
    <>
      {/* {error && <h1>Sản phẩm không tồn tại</h1>} */}
      {error ? (
        <h1 className="text-center">Sản phẩm không tồn tại</h1>
      ) : loading ? (
        <Loading />
      ) : (
        <h1>Edit Post - {loadEdit.title}</h1>
      )}
    </>
  )
}

export default EditPost
