import mongoose from 'mongoose'
const { Schema } = mongoose

const carSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    pricePerDay: {
      type: Number,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    yearModel: {
      type: Number,
      required: true,
    },
    seatCapacity: {
      type: Number,
      required: true,
    },
    fuelType: {
      type: String,
      required: true,
    },
    images: [{ type: String, required: true }],
    isReserved: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
)

const Car = mongoose.model('Car', carSchema)

export default Car
