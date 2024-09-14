import React, { useEffect } from "react";
import { TbCircleCheck, TbCircleX } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteUser,
  deleteUserReset,
} from "../features/user/adminUserDeleteSlice";
import { getAllUsers } from "../features/user/userListSlice";

const UsersList = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const { success } = userDelete;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo || success) {
      dispatch(deleteUserReset());
      dispatch(getAllUsers());
    }
  }, [dispatch, success, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteUser(id));
    }
  };

  const editHandler = (id) => {
    navigate(`/admin/users/${id}`);
  };

  return (
    <div className='p-4'>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white rounded-lg shadow-md border border-gray-200'>
          <thead className='bg-zinc-700 text-white'>
            <tr>
              <th className='py-3 px-4 border-b'>#</th>
              <th className='py-3 px-4 border-b'>Name</th>
              <th className='py-3 px-4 border-b'>Email</th>
              <th className='py-3 px-4 border-b'>Phone</th>
              <th className='py-3 px-4 border-b'>Admin</th>
              <th className='py-3 px-4 border-b'>Edit</th>
              <th className='py-3 px-4 border-b'>Delete</th>
            </tr>
          </thead>
          <tbody className='text-white bg-zinc-800'>
            {users.length > 0 &&
              users.map((user, index) => (
                <tr key={user._id} className='border-b'>
                  <td className='py-2 px-4'>{index + 1}</td>
                  <td className='py-2 px-4'>{user.name}</td>
                  <td className='py-2 px-4'>{user.email}</td>
                  <td className='py-2 px-4'>{user.phoneNumber}</td>
                  <td className='py-2 px-4'>
                    {user.isAdmin ? (
                      <TbCircleCheck className='text-green-500 text-xl' />
                    ) : (
                      <TbCircleX className='text-red-500 text-xl' />
                    )}
                  </td>
                  <td className='py-2 px-4'>
                    <button
                      className='px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition'
                      onClick={() => editHandler(user._id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    {userInfo._id !== user._id ? (
                      <button
                        className='px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
                        onClick={() => deleteHandler(user._id)}
                      >
                        Delete
                      </button>
                    ) : (
                      <button className='px-3 py-1 cursor-default disabled bg-zinc-500 text-zinc-400 rounded-lg transition text-center'>
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
