import React from "react";
import { Link } from "react-router-dom";

const CarItem = ({ car }) => {
  return (
    <div className='border-2 border-zinc-700 rounded-xl'>
      <Link to={`/car/${car._id}`} className='card card-compact w-96 shadow-xl'>
        <figure className='overflow-hidden rounded-xl scale-90 hover:scale-100 transition-all duration-500'>
          <img
            src={car.images[0]}
            alt={`Showcase of a ${car.name}`}
            className='w-full h-56 object-cover'
          />
        </figure>
        <div className='card-body bg-zinc-800 rounded-xl'>
          <h2 className='card-title'>{car.brand}</h2>
          <p>{car.name}</p>
          <div className='flex align-middle justify-between items-center'>
            <div>
              <button className='text-2xl text-yellow-500'>{`${car.pricePerDay}€ / day`}</button>
            </div>
            <div>
              <button className='py-4 px-6 rounded-3xl scale-1 bg-indigo-700 hover:scale-125 hover:bg-indigo-600 transition-all duration-500 font-bold'>
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarItem;
