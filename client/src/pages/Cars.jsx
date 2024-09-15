import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CarLists from "../components/CarLists";
// import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { getCars } from "../features/car/carSlice";

const Cars = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const rangeValue = params.rangeValue || 0;
  const pageNumber = params.pageNumber || 1;

  useEffect(() => {
    dispatch(getCars({ rangeValue, pageNumber }));
  }, [dispatch, rangeValue, pageNumber]);

  return (
    <div className='flex flex-col md:h-[92vh] md:scale-90'>
      {/* Content Area */}
      <main>
        <div className='w-full bg-zinc-800'>
          <CarLists />
        </div>
        {/*  */}
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Cars;
