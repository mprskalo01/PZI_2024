import express from 'express'
import {
  createReservation,
  getAllReservations,
  approveReservation,
  deleteReservation,
  getReservationsByUserId,
  reservationToPaid,
  reservationById,
} from '../controllers/reservationController.js'
import { admin, protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/create').post(protect, createReservation)
router.route('/').get(protect, getReservationsByUserId)
router.route('/admin').get(protect, admin, getAllReservations)

router
  .route('/:id')
  .put(protect, admin, approveReservation)
  .delete(protect, admin, deleteReservation)
  .get(protect, reservationToPaid)

router.route('/:id/paid').put(protect, reservationToPaid)

router.route('/:id/details').get(protect, reservationById)
export default router
