import express from 'express'
import {
  createCar,
  deleteCarById,
  getAllCars,
  getCarById,
  getCars,
  updateCarById,
} from '../controllers/carController.js'
import { admin, protect } from '../middlewares/authMiddleware.js'

const route = express.Router()

route.route('/').get(getCars)

route.route('/admin').get(protect, admin, getAllCars)

route.route('/admin/:id').delete(protect, admin, deleteCarById)

route.route('/:id').get(getCarById)

route.route('/admin/edit/:id').put(protect, admin, updateCarById)

route.route('/admin/create').post(protect, admin, createCar)

export default route
