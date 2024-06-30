import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <h2 className='text-4xl font-bold'>Premium car rentals in your area</h2>
        <h4 className='text-xl text-slate-500'>
          Fast and secure delivery or pick-up!
        </h4>
        <button className='bg-orange-500 mt-3 p-3 cursor-pointer rounded-full transition hover:scale-125'>
          Explore Cars
        </button>
      </div>
      <div className='bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex justify-center group'>
        <Image
          src={"/hero.png"}
          alt='car'
          width={400}
          height={500}
          className='transition duration-500 group-hover:-translate-x-60'
        />
      </div>
    </div>
  );
}

export default Hero;
