import path from "path";
import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage,
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
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

router.post("/", upload.array("images", 5), async (req, res) => {
  try {
    // Example code to save files to a local directory
    const savedFiles = req.files.map((file) => {
      return {
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        buffer: file.buffer, // This would typically be saved to MongoDB as a Binary object
      };
    });

    // Example: save files to MongoDB
    // const results = await File.create(savedFiles);

    res.json(savedFiles);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
});

router.post("/update", upload.array("images", 5), async (req, res) => {
  try {
    // Example code to save files to a local directory
    const savedFiles = req.files.map((file) => {
      return {
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        buffer: file.buffer, // This would typically be saved to MongoDB as a Binary object
      };
    });

    // Example: save files to MongoDB
    // const results = await File.create(savedFiles);

    res.json(savedFiles);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
});

export default router;
