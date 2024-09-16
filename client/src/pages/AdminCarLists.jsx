import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import {
  deleteCarById,
  getAllCars,
  resetCarState,
} from "../features/car/carSlice";

const AdminCarLists = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const carsList = useSelector((state) => state.carsList);
  const { cars, success } = carsList;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo || success) {
      dispatch(resetCarState());
      dispatch(getAllCars());
    }
  }, [dispatch, userInfo, success]);

  const clickHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        await dispatch(deleteCarById(id)).unwrap();
        // Show success message or update UI
      } catch (error) {
        // Show error message
        console.error("Failed to delete car:", error);
      }
    }
  };

  const addHandler = () => {
    navigate("/admin/cars/create");
  };

  const editHandler = (id) => {
    navigate(`/admin/cars/${id}`);
  };

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center mb-6'>
        <button
          onClick={addHandler}
          className='flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition'
        >
          Add Car <BsPlusLg className='ml-2' />
        </button>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-zinc-800 rounded-lg shadow-md border border-gray-200'>
          <thead className='bg-zinc-700 text-white'>
            <tr>
              <th className='py-2 px-4 border-b'>#</th>
              <th className='py-2 px-4 border-b'>Car ID</th>
              <th className='py-2 px-4 border-b'>Brand</th>
              <th className='py-2 px-4 border-b'>Name</th>
              <th className='py-2 px-4 border-b'>Price</th>
              <th className='py-2 px-4 border-b'>Created At</th>
              <th className='py-2 px-4 border-b'></th>
              <th className='py-2 px-4 border-b'></th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {cars?.map((car, index) => (
              <tr key={car._id} className='border-b'>
                <td className='py-2 px-4'>{index + 1}</td>
                <td className='py-2 px-4'>{car._id}</td>
                <td className='py-2 px-4'>{car.brand}</td>
                <td className='py-2 px-4'>{car.name}</td>
                <td className='py-2 px-4'>{car.pricePerDay}</td>
                <td className='py-2 px-4'>{car.createdAt}</td>
                <td className='py-2 px-4'>
                  <button
                    className='px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition'
                    onClick={() => clickHandler(car._id)}
                  >
                    Delete
                  </button>
                </td>
                <td className='py-2 px-4'>
                  <button
                    className='px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition'
                    onClick={() => editHandler(car._id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCarLists;
