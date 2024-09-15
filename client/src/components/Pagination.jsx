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
    <div className='bg-zinc-800'>
      <button
        className='py-1 px-3 bg-indigo-600 hover:bg-indigo-400 hover:scale-110 transition-all duration-500 text-zinc-200 text-2xl rounded-tl-full rounded-bl-full'
        disabled={page <= 1}
        onClick={prevPage}
      >
        «
      </button>
      <button className='py-1 px-3 bg-zinc-800 cursor-default transition-all duration-500 text-indigo-500 text-2xl font-bold'>
        {page}
      </button>
      <button
        className='py-1 px-3 bg-indigo-600 hover:bg-indigo-400 hover:scale-110 transition-all duration-500 text-zinc-200 text-2xl rounded-tr-full rounded-br-full'
        disabled={cars?.length <= 1 || page === pages}
        onClick={nextPage}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
