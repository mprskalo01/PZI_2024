import mongoose from "mongoose";
import Car from "../models/carModel.js";

const getCars = async (req, res) => {
  const rangeValue = +req.query.rangeValue || 0;
  const pageNumber = +req.query.pageNumber || 1;
  const carLimit = 6;
  try {
    const cars = await Car.find({})
      .limit(carLimit)
      .where("pricePerDay")
      .skip(carLimit * (pageNumber - 1))
      .gte(rangeValue);

    const carCount = await Car.countDocuments();

    res.status(200).json({
      cars,
      page: pageNumber,
      pages: Math.ceil(carCount / carLimit),
    });
  } catch (error) {
    res.status(500).json({
      errorMsg: "Something went wrong",
      message: error.message,
    });
  }
};

const getCarById = async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (car) {
    res.status(200).json(car);
  } else {
    res.status(500).json({ message: "car not found" });
  }
};

// Admin
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

// Admin
const deleteCarById = async (req, res) => {
  const { id } = req.params;
  try {
    const car = await Car.findById(id);
    if (car) {
      // Handle deletion of images if necessary
      // Example: Delete images from a local directory or MongoDB GridFS
      // const deletedImages = await Image.deleteMany({ _id: { $in: car.images } });

      await car.remove();
      res.status(200).json("Car deleted");
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const updateCarById = async (req, res) => {
  const {
    name,
    brand,
    pricePerDay,
    transmission,
    yearModel,
    seatCapacity,
    fuelType,
    images,
  } = req.body;

  const { id } = req.params;

  try {
    const car = await Car.findById(id);

    if (car) {
      // Handle update of car properties
      car.name = name || car.name;
      car.brand = brand || car.brand;
      car.pricePerDay = pricePerDay || car.pricePerDay;
      car.transmission = transmission || car.transmission;
      car.yearModel = yearModel || car.yearModel;
      car.seatCapacity = seatCapacity || car.seatCapacity;
      car.fuelType = fuelType || car.fuelType;

      // Handle update of images if necessary
      // Example: Update image URLs in MongoDB
      // car.images = updatedImages || car.images;

      const updatedCar = await car.save();

      res.json({
        _id: updatedCar._id,
        name: updatedCar.name,
        brand: updatedCar.brand,
        pricePerDay: updatedCar.pricePerDay,
        transmission: updatedCar.transmission,
        yearModel: updatedCar.yearModel,
        seatCapacity: updatedCar.seatCapacity,
        fuelType: updatedCar.fuelType,
        images: updatedCar.images,
      });
    } else {
      res.status(404);
      throw new Error("Car not found!");
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const createCar = async (req, res) => {
  const {
    name,
    brand,
    pricePerDay,
    transmission,
    yearModel,
    seatCapacity,
    fuelType,
    images,
  } = req.body;

  try {
    let urlImages = [];
    for (let index = 0; index < images.length; index++) {
      const element = images[index].Location;
      urlImages.push(element);
    }

    if (urlImages.length > 0) {
      const car = new Car({
        user: req.user._id,
        name,
        brand,
        pricePerDay,
        transmission,
        yearModel,
        seatCapacity,
        fuelType,
        images: urlImages,
      });

      const createdCar = await car.save();
      res.status(201).json(createdCar);
    } else {
      res.status(400).json({
        success: false,
        message: "Something went wrong",
        error: "Something went wrong",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export {
  getCars,
  getCarById,
  getAllCars,
  deleteCarById,
  updateCarById,
  createCar,
};
