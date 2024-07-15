import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'
import { loginUser, reset } from '../features/user/userSlice'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, error } = userLogin

  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    } else {
      if (!userInfo) {
        dispatch(reset())
      }
    }
  }, [navigate, userInfo, dispatch])

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(loginUser({ email, password }))
  }
  return (
    <div className="relative flex justify-center flex-col items-center pt-12 mx-2">
      {error && <Alert variant="alert-error" message={error} />}
      <h1 className="text-center text-2xl">Login</h1>
      <form className="form-control w-full max-w-md" onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          onChange={onChange}
          className="input input-bordered w-full mb-6"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={onChange}
          className="input input-bordered w-full"
        />
        <Link to="/sign-up" className="link link-primary">
          Register
        </Link>
        <button className="btn mt-6">Sign in</button>
      </form>
    </div>
  )
}

export default Login
