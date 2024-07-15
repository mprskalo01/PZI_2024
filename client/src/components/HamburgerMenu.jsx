import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
  const [toggle, setToggle] = useState(false)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    toggle
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset')
  }, [toggle])
  const toggleHandler = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <label className="btn btn-circle swap swap-rotate md:hidden z-50">
        <input type="checkbox" checked={toggle} onChange={toggleHandler} />

        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      <div
        className={`fixed w-screen h-screen flex flex-col justify-center text-2xl gap-y-4 bg-gray-800 z-10 items-center  md:hidden top-0  duration-400 transition-all overflow-scroll-hidden ${
          toggle ? 'left-0' : 'left-[-1000px]'
        }`}
      >
        <Link to="/" onClick={toggleHandler}>
          Home
        </Link>
        <Link to="/cars" onClick={toggleHandler}>
          Cars
        </Link>
        <Link to="/about" onClick={toggleHandler}>
          About
        </Link>
        <Link to="/contact" onClick={toggleHandler}>
          Contact
        </Link>
        {userInfo && !userInfo.isAdmin ? (
          <Link
            to="/my-account"
            className="btn btn-md btn-outline btn-secondary"
            onClick={toggleHandler}
          >
            My Account
          </Link>
        ) : (
          <Link
            to="/sign-in"
            className="btn btn-md  btn-outline btn-secondary"
            onClick={toggleHandler}
          >
            Login
          </Link>
        )}
      </div>
    </>
  )
}

export default HamburgerMenu
