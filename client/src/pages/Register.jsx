import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { registerUser, reset } from "../features/user/userSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, phoneNumber, password, confirmPassword } = formData;

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
    dispatch(reset());
  }, [navigate, userInfo, dispatch]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      dispatch(registerUser({ name, email, phoneNumber, password }));
    }
  };

  return (
    <div className='relative flex flex-col justify-center items-center h-[92vh] bg-zinc-800'>
      {error && <Alert variant='alert-error' message={error} />}
      <div className='w-full max-w-lg bg-zinc-700 p-8 rounded-lg shadow-lg'>
        <h1 className='text-center text-3xl font-bold text-white mb-8'>
          Sign Up
        </h1>
        <form className='space-y-6' onSubmit={submitHandler}>
          <div className='form-control'>
            <label htmlFor='name' className='block text-white font-semibold'>
              Name
            </label>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              value={name}
              onChange={onChange}
              className='w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition'
              required
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email' className='block text-white font-semibold'>
              Email
            </label>
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              value={email}
              onChange={onChange}
              className='w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition'
              required
            />
          </div>
          <div className='form-control'>
            <label
              htmlFor='phoneNumber'
              className='block text-white font-semibold'
            >
              Phone Number
            </label>
            <input
              type='tel'
              name='phoneNumber'
              placeholder='Enter your phone number'
              value={phoneNumber}
              onChange={onChange}
              className='w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition'
              pattern='[0-9]+'
              maxLength={12}
              required
            />
          </div>
          <div className='form-control'>
            <label
              htmlFor='password'
              className='block text-white font-semibold'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              value={password}
              onChange={onChange}
              className='w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition'
              required
            />
          </div>
          <div className='form-control'>
            <label
              htmlFor='confirmPassword'
              className='block text-white font-semibold'
            >
              Confirm Password
            </label>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm your password'
              value={confirmPassword}
              onChange={onChange}
              className='w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full py-3 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105'
          >
            Sign Up
          </button>
        </form>
        <p className='text-center text-white font-bold mt-6'>
          Already have an account?{" "}
          <Link
            to='/sign-in'
            className='text-indigo-600 text-xl font-semibold hover:underline'
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
