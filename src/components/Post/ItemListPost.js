import React from "react"
import { Link, useHistory } from "react-router-dom"

function ItemListPost({ title, description, id }) {
  const history = useHistory()
  return (
    <tr>
      <td className="text-bold-500">{title}</td>
      <td>{description}</td>
      <td className="text-bold-500">Consectetur adipisicing</td>
      <td>
        <Link to={`/post/edit/${id}`}>
          <i className="bi bi-pencil-fill icon-custom icon-margin"></i>
        </Link>
        <Link to={`/post/delete/${id}`}>
          <i className="bi bi-trash-fill icon-custom"></i>
        </Link>
      </td>
    </tr>
  )
}

export default ItemListPost
