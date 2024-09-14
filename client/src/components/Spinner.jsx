import React from "react";
import { SpinnerInfinity } from "spinners-react";

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[70.3vh] gap-5'>
      <p className='text-2xl font-bold text-indigo-500'>Loading</p>
      <div role='status'>
        <SpinnerInfinity
          size={90}
          thickness={180}
          speed={100}
          color='rgba(99, 102, 241, 1)'
          secondaryColor='rgba(0, 0, 0, 0.44)'
        />
      </div>
    </div>
  );
};

export default Spinner;
