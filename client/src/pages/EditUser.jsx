import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  resetUserUpdate,
  updateUser,
} from '../features/user/adminUserUpdateSlice'
import {
  getUserDetails,
  resetUserUpdateReset,
} from '../features/user/userDetailsSlice'

const EditUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: 0,
    isAdmin: false,
  })
  const { name, email, phoneNumber, isAdmin } = formData
  const params = useParams()
  const userId = params.id
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const userAdminUpdate = useSelector((state) => state.userAdminUpdate)
  const { success } = userAdminUpdate

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (success) {
      dispatch(resetUserUpdate())
      dispatch(resetUserUpdateReset())
      navigate('/admin/users')
    } else {
      if (!user || user._id !== userId || success) {
        dispatch(getUserDetails(userId))
      } else {
        setFormData((prev) => ({
          ...prev,
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
          isAdmin: user.isAdmin,
        }))
      }
    }
  }, [userId, dispatch, user, userInfo, success, navigate])

  const onChange = (e) => {
    if (e.target.type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        isAdmin: !isAdmin,
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
  }

  const editHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateUser({
        id: userId,
        name,
        email,
        phoneNumber,
        isAdmin,
      })
    )
  }
  return (
    <form
      className="form-control w-[300px] mx-auto mb-20"
      onSubmit={editHandler}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Enter name"
        onChange={onChange}
        className="input input-bordered  w-full mb-6"
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        value={email}
        name="email"
        onChange={onChange}
        placeholder="Enter Email"
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="isAdmin">isAdmin</label>
      <input
        type="checkbox"
        name="isAdmin"
        checked={isAdmin}
        onChange={onChange}
        className="checkbox mb-2"
      />
      <label htmlFor="phonenumber">Phone Number</label>
      <input
        type="text"
        placeholder="Enter number"
        name="phoneNumber"
        value={phoneNumber}
        onChange={onChange}
        className="input input-bordered w-full mb-6"
      />
      {/* <label htmlFor="address">Address</label>
      <input
        type="text"
        placeholder="Enter address"
        className="input input-bordered w-full mb-6"
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        placeholder="Enter City"
        className="input input-bordered w-full mb-6"
      /> */}
      <button className="btn mt-6">Send</button>
    </form>
  )
}

export default EditUser
