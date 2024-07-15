import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  resetProfilTimeout,
  userUpdateProfile,
} from '../features/user/userUpdateSlice'
import Alert from './Alert'

const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  })
  const { name, email, phoneNumber, password, confirmPassword } = formData

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdate = useSelector((state) => state.userUpdate)

  const { success, error } = userUpdate

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      navigate('/sign-in')
    } else {
      if (error || success) {
        dispatch(resetProfilTimeout())
      } else {
        setFormData((prev) => ({
          ...prev,
          name: userInfo.name,
          email: userInfo.email,
          phoneNumber: '' + userInfo.phoneNumber,
        }))
      }
    }
  }, [navigate, userInfo, success, dispatch, error])

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
      dispatch(userUpdateProfile({ email, phoneNumber, password }))
    }
  }
  return (
    <>
      <form
        className="form-control w-[300px] mx-auto mb-20"
        onSubmit={submitHandler}
      >
        {error && <Alert variant="alert-error" message={error} />}
        {success && <Alert variant="alert-success" message="User Updated" />}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={name}
          disabled
          className="input input-bordered w-full mb-6"
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
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          className="input input-bordered w-full mb-6"
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          value={confirmPassword}
          className="input input-bordered w-full"
          onChange={onChange}
        />
        <button className="btn mt-6">Save</button>
      </form>
    </>
  )
}

export default UserProfile
