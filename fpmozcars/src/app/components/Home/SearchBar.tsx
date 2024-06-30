import React from "react";

function SearchBar() {
  return (
    <div className='mt-5'>
      <h2 className='text-center text-xl text-slate-400'>Search</h2>
      <div className='flex justify-center'>
        <div className='flex items-center bg-gray-200 rounded-full p-2 m-2'>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
              />
            </svg>

            <input
              type='text'
              placeholder='Location'
              className='p-2 outline-none bg-transparent text-slate-400'
            />
          </div>
          <div className='border-l border-gray-300'>
            <input
              type='date'
              className='p-2 outline-none bg-transparent text-slate-400'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
