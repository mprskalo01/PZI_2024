import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaBookmark, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user/userSlice";

const MyAccount = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/sign-in");
    }
  }, [navigate, userInfo]);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/sign-in");
  };

  return (
    <div className='h-[92vh] flex flex-col justify-between'>
      <h1 className='text-center text-3xl font-thin mt-10'>
        Welcome {userInfo && userInfo.name}
      </h1>
      <div className='flex flex-col items-center md:items-start md:flex-row md:ml-[20%] gap-5 my-10 '>
        <ul className='menu menu-horizontal  md:menu-vertical md:w-56 md bg-zinc-600 p-2 rounded-box gap-5 text-zinc-200'>
          <li>
            <Link to='profile'>
              <FaUserAlt />
              <p className='hidden sm:block p-2 rounded-full bg-indigo-700'>
                Profile
              </p>
            </Link>
          </li>
          <li>
            <Link to='reservations'>
              <FaBookmark />
              <p className='hidden sm:block p-2 rounded-full bg-indigo-700'>
                Reservation
              </p>
            </Link>
          </li>
          <li onClick={logoutHandler}>
            <span>
              <FaSignInAlt />
              <p className='hidden sm:block p-2 rounded-full bg-red-500'>
                Sign Out
              </p>
            </span>
          </li>
        </ul>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
