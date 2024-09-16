import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { resetCarDetails } from "../features/car/carDetailsSlice";
import { resetCarState } from "../features/car/carSlice";
import { createCar, resetCarCreate } from "../features/car/carCreateSlice";
import Alert from "../components/Alert";
import { FaCheckCircle, FaUpload } from "react-icons/fa";

const CreateCars = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    pricePerDay: "",
    transmission: "automatic",
    yearModel: "",
    seatCapacity: "5",
    fuelType: "petrol",
    images: [],
  });

  const {
    name,
    brand,
    pricePerDay,
    transmission,
    yearModel,
    seatCapacity,
    fuelType,
    images,
  } = formData;
  const [files, setFiles] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carCreate = useSelector((state) => state.carCreate);
  const { success } = carCreate;

  useEffect(() => {
    if (success) {
      dispatch(resetCarCreate());
      dispatch(resetCarState());
      dispatch(resetCarDetails());
      navigate("/admin/cars");
    }
  }, [dispatch, success, navigate]);

  useEffect(() => {
    setError(false);
    setMessage("");
  }, [images]);

  const uploadFileHandler = async (e) => {
    e.preventDefault();
    const MAX_LENGTH = 4;
    if (files.length > MAX_LENGTH) {
      alert(`Cannot upload more than ${MAX_LENGTH} files.`);
      return;
    }

    const formdata = new FormData();
    for (const file of files) {
      formdata.append("images", file);
    }

    try {
      setUploading(true);
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const { data } = await API.post("api/upload", formdata, config);

      setFormData((prev) => ({
        ...prev,
        images: data.imagePaths,
      }));
      setUploading(false);
    } catch (error) {
      setUploading(false);
      setError(true);
      setMessage(error.response?.data?.error || "Something went wrong");
      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 1500);
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { userInfo } = useSelector((state) => state.userLogin);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const carData = {
        name,
        brand,
        pricePerDay: Number(pricePerDay),
        transmission,
        yearModel: Number(yearModel),
        seatCapacity: Number(seatCapacity),
        fuelType,
        images,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await API.post(
        "api/cars/admin/create",
        JSON.stringify(carData),
        config
      );
      dispatch(createCar(data));

      setFormData({
        name: "",
        brand: "",
        pricePerDay: "",
        transmission: "automatic",
        yearModel: "",
        seatCapacity: "5",
        fuelType: "petrol",
        images: [],
      });
      setFiles([]);
    } catch (error) {
      setError(true);
      setMessage(error.response?.data?.message || "Failed to create car");
    } finally {
      setIsSubmitting(false);
    }
  };

  const checkStates = () => {
    return !(
      name.length > 0 &&
      brand.length > 0 &&
      pricePerDay.length > 0 &&
      transmission.length > 0 &&
      yearModel.length > 0 &&
      seatCapacity.length > 0 &&
      fuelType.length > 0
    );
  };

  return (
    <form
      onSubmit={submitHandler}
      className='max-w-4xl mx-auto bg-zinc-700 p-8 shadow-xl rounded-md space-y-6'
    >
      <h2 className='text-2xl font-semibold text-white mb-6 text-center'>
        Create a Car
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* First Section */}
        <div className='flex flex-col space-y-4'>
          <div>
            <label htmlFor='brand' className='text-white font-bold text-xl'>
              Brand
            </label>
            <input
              type='text'
              name='brand'
              value={brand}
              onChange={onChange}
              className='input input-bordered w-full'
            />
          </div>

          <div>
            <label htmlFor='name' className='text-white font-bold text-xl'>
              Model
            </label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              className='input input-bordered w-full'
            />
          </div>

          <div>
            <label
              htmlFor='pricePerDay'
              className='text-white font-bold text-xl'
            >
              Price per day
            </label>
            <input
              type='number'
              name='pricePerDay'
              value={pricePerDay}
              onChange={onChange}
              className='input input-bordered w-full'
              min={10}
            />
          </div>

          <div>
            <label
              htmlFor='transmission'
              className='text-white font-bold text-xl'
            >
              Transmission
            </label>
            <select
              name='transmission'
              value={transmission}
              onChange={onChange}
              className='select select-bordered w-full'
            >
              <option value='manual'>Manual</option>
              <option value='automatic'>Automatic</option>
            </select>
          </div>
        </div>

        {/* Second Section */}
        <div className='flex flex-col space-y-4'>
          <div>
            <label htmlFor='yearModel' className='text-white font-bold text-xl'>
              Year Model
            </label>
            <input
              type='number'
              name='yearModel'
              value={yearModel}
              onChange={onChange}
              className='input input-bordered w-full'
              min={2000}
              max={2025}
            />
          </div>

          <div>
            <label
              htmlFor='seatCapacity'
              className='text-white font-bold text-xl'
            >
              Seat Capacity
            </label>
            <select
              name='seatCapacity'
              value={seatCapacity}
              onChange={onChange}
              className='select select-bordered w-full'
            >
              {[...Array(7)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor='fuelType' className='text-white font-bold text-xl'>
              Fuel
            </label>
            <select
              name='fuelType'
              value={fuelType}
              onChange={onChange}
              className='select select-bordered w-full'
            >
              <option value='petrol'>Petrol</option>
              <option value='diesel'>Diesel</option>
            </select>
          </div>

          <div>
            <label htmlFor='images' className='text-white font-bold text-xl'>
              Images
            </label>
            <input
              type='file'
              name='images'
              accept='image/*'
              onChange={(e) => setFiles(e.target.files)}
              multiple
              className='file-input file-input-bordered file-input-accent w-full'
              disabled={checkStates()}
            />
            <div className='flex justify-between items-center space-x-4'>
              {uploading ? (
                <FaCheckCircle className='text-success text-3xl' />
              ) : (
                <button
                  onClick={uploadFileHandler}
                  className={`flex items-center text-white mt-2 gap-2 btn-sm rounded-lg ${
                    files.length === 0 || error
                      ? "opacity-35 btn-disabled"
                      : "bg-indigo-600"
                  }`}
                >
                  <FaUpload /> Upload images
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {error && <Alert variant='alert-error' message={message} />}

      <button
        type='submit'
        className={`btn bg-indigo-600 hover:scale-110 w-full mt-6 ${
          isSubmitting || images.length === 0 ? "btn-disabled" : ""
        }`}
        disabled={isSubmitting || images.length === 0}
      >
        {isSubmitting ? "Submitting..." : "Send"}
      </button>
    </form>
  );
};

export default CreateCars;
