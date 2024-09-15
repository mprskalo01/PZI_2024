import path from "path";
import express from "express";
import multer from "multer";
import fs from "fs";
import { fileURLToPath } from "url";

const router = express.Router();

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the upload directory path relative to the uploadRoute.js file
const uploadDir = path.join(
  __dirname,
  "..",
  "..",
  "client",
  "public",
  "images"
);

// Ensure the public/images directory exists, and log if it doesn't
if (!fs.existsSync(uploadDir)) {
  console.log(`Directory ${uploadDir} does not exist. Creating it now...`);
  fs.mkdirSync(uploadDir, { recursive: true });
} else {
  console.log(`Directory ${uploadDir} already exists.`);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/webp" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg, .webp and .jpeg formats allowed!"));
    }
  },
});

router.post("/", upload.array("images", 4), async (req, res) => {
  try {
    const imagePaths = req.files.map((file) => `/images/${file.filename}`);
    res.json({ imagePaths });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error uploading images",
      error: error.message,
    });
  }
});

router.post("/update", upload.array("images", 4), async (req, res) => {
  try {
    const imagePaths = req.files.map((file) => `/images/${file.filename}`);
    res.json({ imagePaths });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error updating images",
      error: error.message,
    });
  }
});

export default router;
