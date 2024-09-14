import React from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav
      className={`bg-zinc-900 h-[8vh] ${
        userInfo?.isAdmin
          ? "hidden"
          : "navbar flex items-center justify-between px-10"
      }`}
    >
      <button
        className='text-2xl font-bold text-zinc-200 bg-transparent border-none'
        onClick={() => handleNavigation("/")}
      >
        FPMOZ
      </button>
      <div className='hidden space-x-14 text-zinc-200 items-center font-bold md:flex'>
        <button
          className='py-1 px-3 rounded-3xl bg-gray-600 hover:scale-125 hover:bg-gray-400 transition-all duration-500'
          onClick={() => handleNavigation("/")}
        >
          Home
        </button>
        <button
          className='py-1 px-3 rounded-3xl bg-gray-600 hover:scale-125 hover:bg-gray-400 transition-all duration-500'
          onClick={() => handleNavigation("/cars")}
        >
          Cars
        </button>
        <button
          className='py-1 px-3 rounded-3xl bg-gray-600 hover:scale-125 hover:bg-gray-400 transition-all duration-500'
          onClick={() => handleNavigation("/about")}
        >
          About
        </button>
        <button
          className='py-1 px-3 rounded-3xl bg-gray-600 hover:scale-125 hover:bg-gray-400 transition-all duration-500'
          onClick={() => handleNavigation("/contact")}
        >
          Contact
        </button>
        {userInfo && !userInfo.isAdmin ? (
          <button
            className='py-1 px-3 rounded-3xl scale-1 bg-indigo-700 hover:scale-125 hover:bg-indigo-400 transition-all duration-500'
            onClick={() => handleNavigation("/my-account")}
          >
            My Account
          </button>
        ) : (
          <div className='flex gap-2'>
            <button
              className='py-1 px-3 rounded-3xl scale-1 bg-indigo-700 hover:scale-125 hover:bg-indigo-400 transition-all duration-500'
              onClick={() => handleNavigation("/sign-in")}
            >
              Login
            </button>
            <button
              className='py-1 px-3 rounded-3xl scale-1 bg-indigo-700 hover:scale-125 hover:bg-indigo-400 transition-all duration-500'
              onClick={() => handleNavigation("/sign-up")}
            >
              Register
            </button>
          </div>
        )}
      </div>
      <HamburgerMenu />
    </nav>
  );
};

export default NavBar;
