import React from 'react'
import { format, parseISO } from 'date-fns'
import { Link } from 'react-router-dom'

const ReservationCard = ({ reservation }) => {
  function formatDate(date) {
    return format(parseISO(date), 'dd-MM-yyyy')
  }
  return (
    <div className="card card-compact max-w-sm w-full bg-base-100 shadow-xl image-full z-0">
      <figure>
        <img src={reservation.reservationItem.image} alt="carimg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{reservation.reservationItem.brand}</h2>
        <p>
          The car is reserved from {formatDate(reservation.fromDate)} to{' '}
          {formatDate(reservation.toDate)} totalCost {reservation.totalCost} €
        </p>
        <div>
          {reservation.isApproved ? (
            <button className="btn btn-xs btn-success btn-outline">
              confirmed
            </button>
          ) : (
            <button className="btn btn-xs btn-warning btn-outline">
              not confirmed
            </button>
          )}
          {reservation.isPaid && (
            <button className="btn btn-xs btn-success btn-outline">paid</button>
          )}
        </div>
        <div className="card-actions justify-end">
          {reservation.isApproved && !reservation.isPaid && (
            <Link
              className="btn  btn-secondary btn-sm md:btn-md"
              to={`/reservation/payment/${reservation._id}`}
            >
              Pay
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReservationCard
