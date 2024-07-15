import express from 'express'
import { stripePayment } from '../controllers/stripeController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/payment').post(protect, stripePayment)

export default router
