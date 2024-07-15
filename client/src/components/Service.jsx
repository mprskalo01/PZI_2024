import React from 'react'
import { FaCalendarCheck, FaDonate, FaUserShield } from 'react-icons/fa'

const Service = () => {
  return (
    <div className="flex flex-col items-center gap-y-10 md:gap-y-0 md:flex-row md:justify-evenly my-10">
      <div className="w-40 h-40 flex flex-col justify-center items-center gap-y-2">
        <FaUserShield className="text-7xl" />
        <p className="text-center">Insurance & Protection</p>
      </div>
      <div className="w-40 h-40 flex flex-col justify-center items-center gap-y-2">
        <FaCalendarCheck className="text-7xl" />
        <p className="text-center">Great Service</p>
      </div>
      <div className="w-40 h-40 flex flex-col justify-center items-center gap-y-2">
        <FaDonate className="text-7xl" />
        <p className="text-center">Reasonable Prices</p>
      </div>
    </div>
  )
}

export default Service
