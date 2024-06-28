import React from "react";

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <h2 className='text-[40px]'>Premium car rentals in your area</h2>
        <h4 className='text-[20px]'>Book now!</h4>
        <button className='bg-orange-500 mt-3 p-3 cursor-pointer p-2 rounded-full transition hover:scale-125'>
          Explore Cars
        </button>
      </div>
      <div>Image</div>
    </div>
  );
}

export default Hero;
