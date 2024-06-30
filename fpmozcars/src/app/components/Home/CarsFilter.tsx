import React from "react";

function CarsFilter() {
  return (
    <div>
      <div className='mt-10 flex items-center justify-between'>
        <div className='flex gap-5'>
          <h2 className='text-xl'>Cars Catalouge</h2>
        </div>
        {/* <div className='flex gap-5'>
          <select className='select select-bordered w-full max-w-xs'>
            <option disabled selected>
              Price
            </option>
            <option>Min to Max</option>
            <option>Max to Min</option>
          </select>
          <select className='select select-bordered w-full max-w-xs hidden md:block'>
            <option disabled selected>
              Brand
            </option>
            <option>Honda</option>
            <option>Toyota</option>
            <option>BMW</option>
          </select>
        </div> */}
      </div>
    </div>
  );
}

export default CarsFilter;
