import React, { useEffect } from "react";
import CarItem from "./CarItem";
import Spinner from "./Spinner";
import Alert from "./Alert";
import { getCars } from "../features/car/carSlice";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";

const CarLists = () => {
  const dispatch = useDispatch();
  const carsList = useSelector((state) => state.carsList);

  const { cars, loading, error, pages, page } = carsList;

  useEffect(() => {
    dispatch(getCars({}));
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className='flex flex-col gap-4 items-center mb-10 md:mb-0 md:gap-10'>
      <div className='flex flex-wrap gap-5 justify-center px-5'>
        {error ? (
          <Alert variant='alert-error' message={error} />
        ) : (
          <>
            {cars.map((car) => (
              <CarItem car={car} key={car._id} />
            ))}
          </>
        )}
      </div>
      <Pagination pages={pages} page={page} cars={cars} />
    </div>
  );
};

export default CarLists;
