import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CarLists from '../components/CarLists'
import Footer from '../components/Footer'
import Range from '../components/Range'
import Service from '../components/Service'
import Pagination from '../components/Pagination'
import { useParams } from 'react-router-dom'
import { getCars } from '../features/car/carSlice'

const Cars = () => {
  const [value, setValue] = useState(0)

  const carsList = useSelector((state) => state.carsList)
  const { cars, pages, page } = carsList

  const dispatch = useDispatch()
  const params = useParams()

  const rangeValue = params.rangeValue || 0
  const pageNumber = params.pageNumber || 1

  useEffect(() => {
    dispatch(getCars({ rangeValue, pageNumber }))
  }, [dispatch, rangeValue, pageNumber])

  return (
    <>
      <div className="w-full flex flex-col justify-between md:flex-row">
        <Range min={0} max={1000} value={value} setValue={setValue} />

        <div className="w-full">
          <CarLists />
          <div className="flex justify-center items-center ">
            <Pagination value={value} pages={pages} page={page} cars={cars} />
          </div>
        </div>
      </div>
      <Service />
      <Footer />
    </>
  )
}

export default Cars
