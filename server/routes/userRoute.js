import express from 'express'
import {
  deleteUser,
  getAllUsers,
  getUser,
  getUserById,
  loginUser,
  registerUser,
  updateUserById,
  updateUsersById,
} from '../controllers/userController.js'
import { admin, protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router.route('/profile').get(protect, getUserById)

router.route('/profile-update').put(protect, updateUserById)

router.route('/admin').get(protect, admin, getAllUsers)

router.route('/admin/:id').put(protect, admin, updateUsersById)

router.route('/admin/user-details/:id').get(protect, admin, getUser)

router.route('/admin/delete/:id').delete(protect, admin, deleteUser)

export default router
