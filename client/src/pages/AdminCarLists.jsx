import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import {
  deleteCarById,
  getAllCars,
  resetCarState,
} from '../features/car/carSlice'

const AdminCarLists = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const carsList = useSelector((state) => state.carsList)
  const { cars, success } = carsList

  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo || success) {
      dispatch(resetCarState())
      dispatch(getAllCars())
    }
  }, [dispatch, userInfo, success])

  const clickHandler = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(deleteCarById(id))
    }
  }
  const addHandler = () => {
    navigate('/admin/cars/create')
  }

  const editHandler = (id) => {
    navigate(`/admin/cars/${id}`)
  }

  return (
    <>
      <div>
        <button onClick={addHandler} className="btn btn-sm btn-accent mb-6">
          Add Car <BsPlusLg className="ml-2" />
        </button>
      </div>
      <div className="overflow-x-auto mb-20">
        <table className="table table-compact w-full z-0">
          <thead>
            <tr>
              <th></th>
              <th>CarId</th>
              <th>Brand</th>
              <th>Name</th>
              <th>Price</th>
              <th>CreatedAt</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cars?.map((car, index) => (
              <tr key={car._id}>
                <th>{index + 1}</th>
                <td>{car._id}</td>
                <td>{car.brand}</td>
                <td>{car.name}</td>
                <td>{car.pricePerDay}</td>
                <td>{car.createdAt}</td>
                <td>
                  <button
                    className="btn btn-outline btn-xs btn-error"
                    onClick={() => clickHandler(car._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline btn-xs btn-warning"
                    onClick={() => editHandler(car._id)}
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>CarId</th>
              <th>Brand</th>
              <th>Name</th>
              <th>Price</th>
              <th>CreatedAt</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}

export default AdminCarLists
