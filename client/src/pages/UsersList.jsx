import React from 'react'
import { useEffect } from 'react'
import { TbCircleCheck, TbCircleX } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  deleteUser,
  deleteUserReset,
} from '../features/user/adminUserDeleteSlice'
import { getAllUsers } from '../features/user/userListSlice'

const UsersList = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userList = useSelector((state) => state.userList)
  const { users } = userList

  const userDelete = useSelector((state) => state.userDelete)
  const { success } = userDelete

  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo || success) {
      dispatch(deleteUserReset())
      dispatch(getAllUsers())
    }
  }, [dispatch, success, userInfo])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      //dispatch delete
      dispatch(deleteUser(id))
    }
  }
  const editHandler = (id) => {
    navigate(`/admin/users/${id}`)
  }
  return (
    <>
      <div className="overflow-x-auto mb-20">
        <table className="table table-compact w-full z-0">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Admin</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    {user.isAdmin ? (
                      <TbCircleCheck className="text-2xl text-success" />
                    ) : (
                      <TbCircleX className="text-2xl text-error text-center" />
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-xs btn-outline btn-warning"
                      onClick={() => editHandler(user._id)}
                    >
                      Edit
                    </button>
                  </td>
                  {userInfo._id !== user._id && (
                    <td>
                      <button
                        className="btn btn-xs btn-outline btn-error"
                        onClick={() => deleteHandler(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Admin</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}

export default UsersList
