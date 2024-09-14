import React from "react";
import banner from "../assets/images/carbanner.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className='flex flex-col h-[92vh]'>
      <div
        className='hero flex-grow bg-cover bg-center relative'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className='bg-zinc-800 bg-opacity-30 absolute inset-0'></div>
        <div className='hero-content text-center text-neutral-content relative z-1 flex items-center justify-center h-full'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-2xl md:text-4xl font-bold text-gray-300'>
              Welcome
            </h1>
            <p className='mb-5 text-lg text-gray-300 font-bold'>
              FPMOZ Car Rental | Strive for perfection.
            </p>

            <button
              className='text-white font-bold py-4 px-6 rounded-3xl bg-indigo-700 hover:scale-150 hover:bg-indigo-400 transition-transform duration-500'
              onClick={() => handleNavigation("/cars")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
