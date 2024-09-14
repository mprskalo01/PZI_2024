import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { loginUser, reset } from "../features/user/userSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    } else {
      if (!userInfo) {
        dispatch(reset());
      }
    }
  }, [navigate, userInfo, dispatch]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className='relative flex flex-col justify-center items-center h-[92vh] bg-zinc-800'>
      {error && <Alert variant='alert-error' message={error} />}
      <div className='w-full max-w-lg bg-zinc-700 p-8 rounded-lg shadow-lg'>
        <h1 className='text-center text-3xl font-bold text-white mb-8'>
          Sign In
        </h1>
        <form className='space-y-6' onSubmit={submitHandler}>
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
            />
          </div>
          <button
            type='submit'
            className='w-full py-3 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105'
          >
            Sign In
          </button>
        </form>
        <p className='text-center text-white font bold mt-6'>
          Don’t have an account?{" "}
          <Link
            to='/sign-up'
            className='text-indigo-600 text-xl font-semibold hover:underline'
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
