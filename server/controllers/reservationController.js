import mongoose from 'mongoose'
import Reservation from '../models/reservationModel.js'
import Car from '../models/carModel.js'

const createReservation = async (req, res) => {
  const { fromDate, toDate, carId, totalCost } = req.body

  const car = await Car.findById(carId)

  if (car) {
    const reservationItem = {
      car: carId,
      name: car.name,
      image: car.images[0],
      brand: car.brand,
      pricePerDay: car.pricePerDay,
    }
    if (reservationItem && reservationItem === 0) {
      res.status(400)
      res.json({ message: 'No order items' })
    } else {
      car.isReserved = true
      const toReserved = await car.save()
      const reservation = await Reservation.create({
        reservationItem,
        user: req.user._id,
        fromDate,
        toDate,
        totalCost: totalCost,
      })

      res.status(200).json(reservation)
    }
  }
}

//user
const reservationById = async (req, res) => {
  const reservation = await Reservation.findById(req.params.id)
  console.log(reservation)
  try {
    if (reservation) {
      res.json(reservation)
    } else {
      res.status(400)
      throw new Error('No Reservation')
    }
  } catch (error) {
    res.status(400)
    res.json({ message: error.message })
  }
}
//user
const reservationToPaid = async (req, res) => {
  const reservation = await Reservation.findById(req.params.id)
  try {
    if (reservation) {
      reservation.isPaid = true
      reservation.paidAt = Date.now()
      await reservation.save()
      res.json(reservation)
    } else {
      res.status(400)
      throw new Error('No Reservation')
    }
  } catch (error) {
    res.status(400)
    res.json({ message: error.message })
  }
}

//user
const getReservationsByUserId = async (req, res) => {
  const reservation = await Reservation.find({ user: req.user._id })
  try {
    if (reservation && reservation.length > 0) {
      res.json(reservation)
    } else {
      res.status(400)
      throw new Error('No Reservation')
    }
  } catch (error) {
    res.status(400)
    res.json({ message: error.message })
  }
}
//admin only
const getAllReservations = async (req, res) => {
  const reservation = await Reservation.find({}).populate(
    'user',
    'name phoneNumber'
  )

  if (reservation && reservation.length > 0) {
    res.json(reservation)
  } else {
    res.json({ message: 'No reservation' })
  }
}

//admin only
const approveReservation = async (req, res) => {
  const reservation = await Reservation.findById(req.params.id)
  if (reservation) {
    reservation.isApproved = true
    await reservation.save()
    res.status(200).json('Reservation approved')
  } else {
    res.status(400).json({ message: 'Cannot be approved' })
  }
}

//admin only
const deleteReservation = async (req, res) => {
  const { id } = req.params
  const reservation = await Reservation.findById(id)
  if (reservation) {
    const car = await Car.findById(reservation.reservationItem.car)
    car.isReserved = false
    await car.save()

    await reservation.remove()
    res.status(200).json('Reservation deleted')
  } else {
    res.status(400).json({ message: 'Could not delete!' })
  }
}

export {
  createReservation,
  getAllReservations,
  approveReservation,
  deleteReservation,
  getReservationsByUserId,
  reservationToPaid,
  reservationById,
}
