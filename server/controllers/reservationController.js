import mongoose from "mongoose";
import Reservation from "../models/reservationModel.js";
import Car from "../models/carModel.js";

const createReservation = async (req, res) => {
  const { fromDate, toDate, carId, totalCost } = req.body;

  const car = await Car.findById(carId);

  if (car) {
    const reservationItem = {
      car: carId,
      name: car.name,
      image: car.images[0],
      brand: car.brand,
      pricePerDay: car.pricePerDay,
    };
    if (reservationItem && reservationItem === 0) {
      res.status(400);
      res.json({ message: "No order items" });
    } else {
      car.isReserved = true;
      const toReserved = await car.save();
      const reservation = await Reservation.create({
        reservationItem,
        user: req.user._id,
        fromDate,
        toDate,
        totalCost: totalCost,
      });

      res.status(200).json(reservation);
    }
  }
};

//user
const reservationById = async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);
  console.log(reservation);
  try {
    if (reservation) {
      res.json(reservation);
    } else {
      res.status(400);
      throw new Error("No Reservation");
    }
  } catch (error) {
    res.status(400);
    res.json({ message: error.message });
  }
};
//user
const reservationToPaid = async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);
  try {
    if (reservation) {
      reservation.isPaid = true;
      reservation.paidAt = Date.now();
      await reservation.save();
      res.json(reservation);
    } else {
      res.status(400);
      throw new Error("No Reservation");
    }
  } catch (error) {
    res.status(400);
    res.json({ message: error.message });
  }
};

//user
const getReservationsByUserId = async (req, res) => {
  const reservation = await Reservation.find({ user: req.user._id });
  try {
    if (reservation && reservation.length > 0) {
      res.json(reservation);
    } else {
      res.status(400);
      throw new Error("No Reservation");
    }
  } catch (error) {
    res.status(400);
    res.json({ message: error.message });
  }
};
//admin only
const getAllReservations = async (req, res) => {
  const reservation = await Reservation.find({}).populate(
    "user",
    "name phoneNumber"
  );

  if (reservation && reservation.length > 0) {
    res.json(reservation);
  } else {
    res.json({ message: "No reservation" });
  }
};

//admin only
const approveReservation = async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);
  if (reservation) {
    reservation.isApproved = true;
    await reservation.save();
    res.status(200).json("Reservation approved");
  } else {
    res.status(400).json({ message: "Cannot be approved" });
  }
};

//admin only
const deleteReservation = async (req, res) => {
  const { id } = req.params;

  try {
    const reservation = await Reservation.findById(id);

    if (!reservation) {
      return res
        .status(404)
        .json({ success: false, message: "Reservation not found" });
    }

    const car = await Car.findById(reservation.reservationItem.car);

    if (!car) {
      return res
        .status(404)
        .json({ success: false, message: "Associated car not found" });
    }

    // Update car status
    car.isReserved = false;
    await car.save();

    // Delete the reservation
    await Reservation.deleteOne({ _id: id });

    res
      .status(200)
      .json({
        success: true,
        message: "Reservation deleted and car status updated",
      });
  } catch (error) {
    console.error("Error in deleteReservation:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the reservation",
      error: error.message,
    });
  }
};
export {
  createReservation,
  getAllReservations,
  approveReservation,
  deleteReservation,
  getReservationsByUserId,
  reservationToPaid,
  reservationById,
};
