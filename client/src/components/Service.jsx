import React from "react";
import { FaCalendarCheck, FaDonate, FaUserShield } from "react-icons/fa";

const Service = () => {
  return (
    <div className='hidden md:flex md:gap-y-0 md:flex-row md:justify-evenly my-5'>
      <div className='w-40 h-40 flex flex-col justify-center items-center gap-y-2'>
        <FaUserShield className='text-7xl' />
        <p className='text-center'>Security</p>
      </div>
      <div className='w-40 h-40 flex flex-col justify-center items-center gap-y-2'>
        <FaCalendarCheck className='text-7xl' />
        <p className='text-center'>Availability</p>
      </div>
      <div className='w-40 h-40 flex flex-col justify-center items-center gap-y-2'>
        <FaDonate className='text-7xl' />
        <p className='text-center'>Affordability</p>
      </div>
    </div>
  );
};

export default Service;
