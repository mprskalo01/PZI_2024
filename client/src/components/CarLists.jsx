import React, { useEffect } from 'react'
import CarItem from './CarItem'
import Spinner from './Spinner'
import Alert from './Alert'
import { getCars } from '../features/car/carSlice'
import { useDispatch, useSelector } from 'react-redux'

const CarLists = () => {
  const dispatch = useDispatch()
  const carsList = useSelector((state) => state.carsList)

  const { cars, loading, error } = carsList

  useEffect(() => {
    dispatch(getCars({}))
  }, [dispatch])

  if (loading) {
    return <Spinner />
  }
  return (
    <div className="flex flex-wrap gap-5 justify-center my-20 px-5">
      {error ? (
        <Alert variant="alert-error" message={error} />
      ) : (
        <>
          {cars.map((car) => (
            <CarItem car={car} key={car._id} />
          ))}
        </>
      )}
    </div>
  )
}

export default CarLists
