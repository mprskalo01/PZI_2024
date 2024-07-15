import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaBookmark, FaCar, FaUserAlt } from 'react-icons/fa'
import { useEffect } from 'react'
import { getAllUsers } from '../features/user/userListSlice'
import { getAllReservations } from '../features/reservation/reservationListSlice'
import { getAllCars } from '../features/car/carSlice'

const Dashboard = () => {
  const dispatch = useDispatch()

  const carsList = useSelector((state) => state.carsList)
  const { cars } = carsList

  const userList = useSelector((state) => state.userList)
  const { users } = userList

  const reservationList = useSelector((state) => state.reservationList)
  const { reservations } = reservationList
  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getAllReservations())
    dispatch(getAllCars())
  }, [dispatch])

  return (
    <div>
      <div className="stats stats-vertical md:stats-horizontal shadow mx-auto">
        <div className="stat">
          <div className="stat-figure text-primary">
            <FaCar className="text-4xl" />
          </div>
          <div className="stat-title">Total Cars</div>
          <div className="stat-value text-primary">{cars?.length}</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBookmark className="text-4xl text-accent" />
          </div>
          <div className="stat-title">Reservations</div>
          <div className="stat-value text-accent">
            {!reservations
              ? 0
              : reservations.length > 0
              ? reservations.length
              : 0}
          </div>
          <div className="stat-desc">4 confirmed & 10 unconfirmed</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserAlt className="text-4xl" />
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{users.length}</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
