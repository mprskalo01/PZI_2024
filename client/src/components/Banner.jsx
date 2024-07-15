import React from "react";
import banner from "../assets/images/homephoto.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
          <p className="mb-5">
            FPMOZ Car Rental - Best Cars with the Best Price
          </p>
          <Link to="/cars" className="btn bg-orange-500 opacity-50">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
