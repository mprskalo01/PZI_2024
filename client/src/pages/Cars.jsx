import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarLists from "../components/CarLists";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";
import { getCars } from "../features/car/carSlice";

const Cars = () => {
  const carsList = useSelector((state) => state.carsList);
  const { cars, pages, page } = carsList;
  const dispatch = useDispatch();
  const params = useParams();
  const rangeValue = params.rangeValue || 0;
  const pageNumber = params.pageNumber || 1;

  useEffect(() => {
    dispatch(getCars({ rangeValue, pageNumber }));
  }, [dispatch, rangeValue, pageNumber]);

  return (
    <div className='flex flex-col md:h-[92vh]'>
      {/* Content Area */}
      <main className='flex-grow flex flex-col md:h-[80vh]'>
        <div className='w-full md:flex-grow md:overflow-hidden'>
          <CarLists />
        </div>
        <div className='md:mt-auto py-4 flex justify-center items-center'>
          <Pagination pages={pages} page={page} cars={cars} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cars;
