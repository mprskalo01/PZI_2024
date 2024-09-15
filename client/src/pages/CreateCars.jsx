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
    transmission: "automatic", // Default to automatic
    yearModel: "",
    seatCapacity: "5", // Default to 5
    fuelType: "petrol", // Default to petrol
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
    const MAX_LENGTH = 4; // Changed to 4 as per your earlier requirement
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
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await API.post("api/upload", formdata, config);

      setFormData((prev) => ({
        ...prev,
        images: data.imagePaths, // Update images state with the array of paths
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

    if (isSubmitting) {
      console.log("Submission already in progress. Ignoring this request.");
      return;
    }

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

      console.log("Submitting car data:", carData);

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
      console.log("Server response:", data);
      dispatch(createCar(data));

      // Clear form after successful submission
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
      console.error("Error creating car:", error.response || error);
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
      className='form-control w-[300px] mx-auto mb-20'
    >
      <label htmlFor='brand'>Brand</label>
      <input
        type='text'
        name='brand'
        value={brand}
        onChange={onChange}
        className='input input-bordered w-full mb-6'
      />
      <label htmlFor='name'>Model</label>
      <input
        type='text'
        value={name}
        name='name'
        onChange={onChange}
        className='input input-bordered w-full mb-6'
      />

      <label htmlFor='pricePerDay'>Price per day</label>
      <input
        type='number'
        name='pricePerDay'
        value={pricePerDay}
        onChange={onChange}
        className='input input-bordered w-full mb-6'
        min={10}
      />

      <label htmlFor='transmission'>Transmission</label>
      <select
        name='transmission'
        value={transmission}
        onChange={onChange}
        className='select select-bordered w-full mb-6'
      >
        <option value='manual'>Manual</option>
        <option value='automatic'>Automatic</option>
      </select>

      <label htmlFor='yearModel'>Year Model</label>
      <input
        type='number'
        name='yearModel'
        value={yearModel}
        onChange={onChange}
        className='input input-bordered w-full mb-6'
        min={2000}
        max={2025}
      />

      <label htmlFor='seatCapacity'>Seat Capacity</label>
      <select
        name='seatCapacity'
        value={seatCapacity}
        onChange={onChange}
        className='select select-bordered w-full mb-6'
      >
        {[...Array(7)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <label htmlFor='fuelType'>Fuel</label>
      <select
        name='fuelType'
        value={fuelType}
        onChange={onChange}
        className='select select-bordered w-full mb-6'
      >
        <option value='petrol'>Petrol</option>
        <option value='diesel'>Diesel</option>
      </select>

      <label htmlFor='images'>Images</label>
      <input
        type='file'
        name='images'
        accept='image/*'
        onChange={(e) => setFiles(e.target.files)}
        multiple
        className='file-input file-input-bordered file-input-accent w-full max-w-xs'
        disabled={checkStates()}
      />

      <div className='mt-2 flex-col space-y-2 items-center'>
        {error && <Alert variant='alert-error' message={message} />}
        {uploading ? (
          <FaCheckCircle className='text-success text-3xl' />
        ) : (
          <button
            onClick={uploadFileHandler}
            className={`flex gap-2 items-center btn-sm rounded-lg ${
              files.length === 0 || error ? "btn-disabled" : "btn-accent"
            }`}
          >
            Upload images <FaUpload />
          </button>
        )}
      </div>

      <button
        className={`btn mt-6 ${
          isSubmitting || images.length === 0 ? "btn-disabled" : "bg-sky-500"
        }`}
        type='submit'
        disabled={isSubmitting || images.length === 0}
      >
        {isSubmitting ? "Submitting..." : "Send"}
      </button>
    </form>
  );
};

export default CreateCars;
