import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1] // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error('Authentication failed!')
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(verified.id).select('-password')

    next()
  } catch (err) {
    res.status(400).send('Invalid token !')
  }
}

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not Authorized as an Admin')
  }
}

export { protect, admin }
