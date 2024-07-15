import React from "react";
import { Link } from "react-router-dom";

const CarItem = ({ car }) => {
  return (
    <Link
      to={`/car/${car._id}`}
      className="card card-compact w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img
          src={car.images[0]}
          alt="Shoes"
          className="w-full md:h-56 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{car.brand}</h2>
        <p>{car.name}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm md:btn-md bg-orange-500">
            Reserve Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CarItem;
