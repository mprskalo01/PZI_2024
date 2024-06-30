import React, { useState } from "react";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { LuFuel } from "react-icons/lu";
import { FaCarSide } from "react-icons/fa";

function CarCard(props: any) {
  const [car, setCar] = useState(props.car);
  return (
    <div className='group bg-gray-200 p-2 hover:bg-white hover:border-[1px] cursor-pointer transition-all duration-400 ease-in-out border-orange-400 rounded-xl group align-middle'>
      <div>
        <h2 className='text-xl font-medium mb-2'>{car.name}</h2>
        <h2 className='text-3xl font-bold mb-2'>
          <span className='text-sm'>€</span>
          {car.price}
          <span className='text-sm'>/day</span>
        </h2>
        <img
          src={car.image?.url}
          alt={car.name}
          className='w-[220px] h-[200px] mb-3 object-contain group-hover:scale-150  transition-all duration-800 ease-in-out ml-auto mr-auto'
        />
      </div>
      <div className='flex justify-around'>
        <div className='text-center text-slate-400'>
          <MdAirlineSeatReclineNormal className='w-full text-lg mb-2' />
          <h2 className='line-clamp-5 textarea-md font-light'>
            {car.seat} Seats
          </h2>
        </div>
        <div className='text-center text-slate-400'>
          <FaCarSide className='w-full text-lg mb-2' />
          <h2 className='line-clamp-5 textarea-md font-light'>{car.carType}</h2>
        </div>
        <div className='text-center text-slate-400'>
          <LuFuel className='w-full text-lg mb-2' />
          <h2 className='line-clamp-5 textarea-md font-light'>
            {car.carAvg} L/100km
          </h2>
        </div>
        <button className='hidden group-hover:block bg-orange-500 mt-3 p-3 cursor-pointer rounded-full transition hover:scale-125'>
          Rent Now!
        </button>
      </div>
    </div>
  );
}

export default CarCard;
