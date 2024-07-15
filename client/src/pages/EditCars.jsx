import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../api/api'
import { getCarbyId, resetCarDetails } from '../features/car/carDetailsSlice'
import { resetCarState } from '../features/car/carSlice'
import { resetCarUpdate, updateCar } from '../features/car/carUpdateSlice'

const EditCars = () => {
  const [uploading, setUploading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    pricePerDay: '',
    transmission: '',
    yearModel: '',
    seatCapacity: '',
    fuelType: '',
    images: [],
  })

  const {
    name,
    brand,
    pricePerDay,
    transmission,
    yearModel,
    seatCapacity,
    fuelType,
    images,
  } = formData

  const params = useParams()
  const navigate = useNavigate()
  const carId = params.id

  const dispatch = useDispatch()

  const carDetails = useSelector((state) => state.carDetails)
  const { car } = carDetails

  const carUpdate = useSelector((state) => state.carUpdate)
  const { success } = carUpdate

  useEffect(() => {
    if (success) {
      dispatch(resetCarUpdate())
      dispatch(resetCarState())
      dispatch(resetCarDetails())
      navigate('/admin/cars')
    } else {
      if (car._id !== carId) {
        dispatch(getCarbyId(carId))
      } else {
        setFormData((prev) => ({
          ...prev,
          name: car.name,
          brand: car.brand,
          pricePerDay: car.pricePerDay,
          transmission: car.transmission,
          yearModel: car.yearModel,
          seatCapacity: car.seatCapacity,
          fuelType: car.fuelType,
        }))
      }
    }
  }, [dispatch, car, carId, success, navigate])

  const uploadFileHandler = async (e) => {
    const MAX_LENGTH = 5
    if (Array.from(e.target.files).length > MAX_LENGTH) {
      e.preventDefault()
      alert(`Cannot upload files more than ${MAX_LENGTH}`)
      return
    }
    const files = e.target.files

    const formdata = new FormData()
    for (let i = 0; i < files.length; i++) {
      formdata.append('images', files[i])
    }
    try {
      setUploading(false)
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await API.post('api/upload/update', formdata, config)

      setFormData((prev) => ({
        ...prev,
        images: data,
      }))
      setUploading(true)
    } catch (error) {
      setUploading(false)
      console.log(error)
    }
  }
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    // dispatch update
    dispatch(
      updateCar({
        id: carId,
        name,
        brand,
        pricePerDay,
        transmission,
        yearModel,
        seatCapacity,
        fuelType,
        images,
      })
    )
  }
  return (
    <form
      className="form-control w-[300px] mx-auto mb-20"
      onSubmit={submitHandler}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={name}
        name="name"
        onChange={onChange}
        className="input input-bordered  w-full mb-6"
      />
      <label htmlFor="brand">Brand</label>
      <input
        type="text"
        name="brand"
        value={brand}
        onChange={onChange}
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="priceperday">Price per day</label>
      <input
        type="number"
        name="pricePerDay"
        value={pricePerDay}
        onChange={onChange}
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="transmission">Transmission</label>
      <input
        type="text"
        name="transmission"
        value={transmission}
        onChange={onChange}
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="yearmodel">Year Model</label>
      <input
        type="number"
        name="yearModel"
        value={yearModel}
        onChange={onChange}
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="seatcapacity">Seat Capacity</label>
      <input
        type="number"
        name="seatCapacity"
        value={seatCapacity}
        onChange={onChange}
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="fueltype">Fuel</label>
      <input
        type="text"
        name="fuelType"
        value={fuelType}
        onChange={onChange}
        className="input input-bordered w-full mb-6"
      />

      <label htmlFor="images">Images</label>
      <input
        type="file"
        name="images"
        accept="image/*"
        onChange={uploadFileHandler}
        multiple
      />

      <button
        className={`btn mt-6 ${
          uploading ? 'btn-success' : 'btn-disabled loading'
        }`}
      >
        Send
      </button>
    </form>
  )
}

export default EditCars
