import React from "react";
import { FaBookmark, FaCar, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import { useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";

const AdminHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/sign-in");
  };

  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      {/* Sidebar */}
      <div className='bg-zinc-900 text-gray-100 md:w-64 w-full md:flex md:flex-col flex-shrink-0 hidden'>
        <ul className='flex flex-col p-4 space-y-2'>
          <li>
            <Link
              to='dashboard'
              className='flex items-center p-2 rounded-lg hover:bg-gray-700 transition'
            >
              <AiOutlineDashboard className='text-xl' />
              <span className='ml-2'>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to='reservations'
              className='flex items-center p-2 rounded-lg hover:bg-gray-700 transition'
            >
              <FaBookmark className='text-xl' />
              <span className='ml-2'>Reservation</span>
            </Link>
          </li>
          <li>
            <Link
              to='cars'
              className='flex items-center p-2 rounded-lg hover:bg-gray-700 transition'
            >
              <FaCar className='text-xl' />
              <span className='ml-2'>Cars</span>
            </Link>
          </li>
          <li>
            <Link
              to='users'
              className='flex items-center p-2 rounded-lg hover:bg-gray-700 transition'
            >
              <FaUserAlt className='text-xl' />
              <span className='ml-2'>Users</span>
            </Link>
          </li>
          <li>
            <button
              onClick={logoutHandler}
              className='flex items-center p-2 rounded-lg hover:bg-gray-700 transition w-full text-left'
            >
              <FaSignInAlt className='text-xl' />
              <span className='ml-2'>Sign Out</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <AdminNavbar />

      {/* Main Content */}
      <main className='flex-1 p-4 md:ml-64'>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminHome;
