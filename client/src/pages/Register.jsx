import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'
import { registerUser, reset } from '../features/user/userSlice'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  })
  const { name, email, phoneNumber, password, confirmPassword } = formData

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, error } = userLogin

  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
    dispatch(reset())
  }, [navigate, userInfo, dispatch])

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
    } else {
      dispatch(registerUser({ name, email, phoneNumber, password }))
      console.log('hello')
    }
  }
  return (
    <div className="relative flex justify-center flex-col items-center pt-12 mx-2">
      {error && <Alert variant="text-error" message={error} />}
      <h1 className="text-center text-2xl">Register</h1>
      <form className="form-control w-full max-w-md" onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={name}
          className="input input-bordered w-full mb-6"
          onChange={onChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          value={email}
          className="input input-bordered w-full mb-6"
          onChange={onChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
        <label htmlFor="phonenumber">Phone Number</label>
        <input
          type="tel"
          placeholder="Enter phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          maxLength={12}
          pattern="[0-9]+"
          className="input input-bordered w-full mb-6"
          onChange={onChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          className="input input-bordered w-full mb-6"
          onChange={onChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          value={confirmPassword}
          className="input input-bordered w-full"
          onChange={onChange}
          required
        />
        <Link to="/sign-in" className="link link-primary">
          Sign in
        </Link>
        <button className="btn mt-6">Sign up</button>
      </form>
    </div>
  )
}

export default Register
