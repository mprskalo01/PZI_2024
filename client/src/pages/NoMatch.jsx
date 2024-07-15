import React from 'react'
import { Link } from 'react-router-dom'
import { FaCarCrash } from 'react-icons/fa'

const NoMatch = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-2">
      <FaCarCrash className="text-9xl text-accent" />
      <p className="text-6xl font-bold">404</p>

      <Link to="/" className="btn btn-outline btn-accent">
        Go Home
      </Link>
    </div>
  )
}

export default NoMatch
