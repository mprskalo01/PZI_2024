import React from "react";
import { useNavigate } from "react-router-dom";

const Pagination = ({ value, pages, page, cars }) => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate(
      value ? `/cars/page/${page + 1}/${value}` : `/cars/page/${page + 1}`
    );
  };
  const prevPage = () => {
    navigate(
      value ? `/cars/page/${page - 1}/${value}` : `/cars/page/${page - 1}`
    );
  };
  return (
    <div className=''>
      <button
        className='py-1 px-3 bg-gray-600 hover:bg-gray-400 transition-all duration-500 text-indigo-500 text-2xl rounded-tl-full rounded-bl-full'
        disabled={page <= 1}
        onClick={prevPage}
      >
        «
      </button>
      <button className='py-1 px-3 bg-gray-800 hover:bg-gray-600 transition-all duration-500 text-indigo-500 text-2xl font-bold'>
        {page}
      </button>
      <button
        className='py-1 px-3 bg-gray-600 hover:bg-gray-400 transition-all duration-500 text-indigo-500 text-2xl rounded-tr-full rounded-br-full'
        disabled={cars?.length <= 1 || page === pages}
        onClick={nextPage}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
