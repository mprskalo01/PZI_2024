import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Slider from "../components/Slider";
import { FaCalendar, FaGasPump } from "react-icons/fa";
import { GiJoystick } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCarbyId } from "../features/car/carDetailsSlice";
import Spinner from "../components/Spinner";
import Alert from "../components/Alert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from "date-fns";
import {
  createUserReservation,
  resetReservation,
} from "../features/reservation/reservationSlice";

const CarDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const navigate = useNavigate();
  const params = useParams();
  const carId = params.id;

  const dispatch = useDispatch();
  const carDetails = useSelector((state) => state.carDetails);
  const { loading, error, car } = carDetails;

  const reservationUser = useSelector((state) => state.reservationUser);
  const { laoding: reservationLoading, success } = reservationUser;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!car || car._id !== carId || success) {
      dispatch(resetReservation());
      dispatch(getCarbyId(carId));
    }
  }, [dispatch, navigate, car, carId, success, userInfo]);

  function dateDifference(dateOne, dateTwo) {
    const miliseconds = dateTwo.getTime() - dateOne.getTime();

    let TotalDays = Math.ceil(miliseconds / (1000 * 3600 * 24));
    return TotalDays;
  }

  const reserveHandler = () => {
    const diff = dateDifference(startDate, endDate);
    if (diff <= 0) {
      alert("min 1 day difference");
    } else {
      const totalCost = diff * car.pricePerDay;
      dispatch(
        createUserReservation({
          fromDate: startDate,
          toDate: endDate,
          carId,
          totalCost,
        })
      );
    }
  };
  console.log(car.images);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className='md:h-[92vh]'>
      {error ? (
        <Alert variant='alert-error' message={error} />
      ) : (
        <>
          <Slider images={car.images} />
          <div className='w-full flex flex-col md:flex-row md:justify-around mt-20 items-center '>
            <div className=' flex flex-col items-center gap-5'>
              <p className='text-4xl mb-2 text-white px-14 py-2 shadow-2xl rounded-full bg-zinc-700 border-2 border-zinc-600'>
                {`${car.brand} 
                ${car.name}`}
              </p>
              <div className='flex flex-col gap-4 md:flex-row md:gap-10 mt-10'>
                <div className='flex flex-col shadow-xl bg-zinc-700 rounded-3xl w-32 h-32 justify-center items-center hover:scale-110'>
                  <FaCalendar className='text-5xl mb-2 text-indigo-400' />
                  <p className='text-2xl font-light text-white'>
                    {car.yearModel}
                  </p>
                  <p className='text-lg text-yellow-400'>Model Year</p>
                </div>
                <div className='flex flex-col shadow-xl bg-zinc-700 rounded-3xl w-32 h-32 justify-center items-center hover:scale-110'>
                  <GiJoystick className='text-5xl mb-2 text-indigo-400' />
                  <p className='text-2xl font-light text-white'>
                    {car.transmission}
                  </p>
                  <p className='text-lg text-yellow-400'>Transmission</p>
                </div>
                <div className='flex flex-col shadow-xl bg-zinc-700 rounded-3xl w-32 h-32 justify-center items-center hover:scale-110'>
                  <FaGasPump className='text-5xl mb-2 text-indigo-400' />
                  <p className='text-2xl font-light text-white'>
                    {car.fuelType}
                  </p>
                  <p className='text-lg text-yellow-400'>Fuel</p>
                </div>
                <div className='flex flex-col shadow-xl bg-zinc-700 rounded-3xl w-32 h-32 justify-center items-center hover:scale-110'>
                  <MdAirlineSeatReclineExtra className='text-5xl mb-2 text-indigo-400' />
                  <p className='text-2xl font-light text-white'>
                    {car.seatCapacity}
                  </p>
                  <p className='text-lg text-yellow-400'>Seats</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-4xl text-yellow-500 mb-5'>
                {car.pricePerDay} € / day
              </p>
              <label htmlFor='fromdate' className='text-white font-bold'>
                From:{" "}
              </label>
              <DatePicker
                className='bg-zinc-600 font-bold text-white rounded-md px-5 py-2'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                minDate={new Date()}
                endDate={endDate}
              />
              <label htmlFor='todate' className='text-white font-bold'>
                To:{" "}
              </label>
              <DatePicker
                className='bg-zinc-600 font-bold text-white rounded-md px-5 py-2'
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                maxDate={addMonths(startDate, 1)}
                showDisabledMonthNavigation
              />
              {userInfo ? (
                <button
                  className={`text-white my-5 font-bold py-4 px-6 rounded-3xl bg-indigo-700 hover:scale-105 transition-transform duration-500 ${
                    reservationLoading ? "loading" : ""
                  }`}
                  onClick={() => reserveHandler()}
                  disabled={car.isReserved}
                >
                  {car.isReserved ? "Reserved" : "Reserve"}
                </button>
              ) : (
                <Link
                  to='/sign-in'
                  className='text-white my-5 font-bold py-4 px-6 rounded-3xl bg-indigo-700 hover:scale-105 transition-transform duration-500'
                >
                  Sign in for reservations
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CarDetails;
