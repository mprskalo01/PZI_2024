import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pagination = ({ value, pages, page, cars }) => {
  const navigate = useNavigate()
  const nextPage = () => {
    navigate(
      value ? `/cars/page/${page + 1}/${value}` : `/cars/page/${page + 1}`
    )
  }
  const prevPage = () => {
    navigate(
      value ? `/cars/page/${page - 1}/${value}` : `/cars/page/${page - 1}`
    )
  }
  return (
    <div className="btn-group">
      <button className="btn" disabled={page <= 1} onClick={prevPage}>
        «
      </button>
      <button className="btn">{page}</button>
      <button
        className="btn"
        disabled={cars?.length <= 1 || page === pages}
        onClick={nextPage}
      >
        »
      </button>
    </div>
  )
}

export default Pagination
