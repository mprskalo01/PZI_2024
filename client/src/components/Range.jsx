import React from 'react'
import { useNavigate } from 'react-router-dom'

const Range = ({ min, max, value, setValue }) => {
  const navigate = useNavigate()

  const filterHandler = () => {
    if (value.trim()) {
      navigate(`/cars/${value}`)
    } else {
      navigate('/')
    }
  }
  return (
    <div className="w-1/2 md:w-1/4 h-60 ml-3 flex flex-col justify-center">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="range range-secondary"
        step="25"
      />
      <div className="flex justify-between">
        <p>{min}</p> <p>{value}</p>
      </div>

      <div className="flex justify-end">
        <button className="btn mt-4" onClick={filterHandler}>
          Search
        </button>
      </div>
    </div>
  )
}

export default Range
