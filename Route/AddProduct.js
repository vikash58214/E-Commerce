const express = require("express");
const productRoute = express.Router();
const cloudinary = require("../utils/cloudinary");
const multer = require("multer");
const Product = require("../Model/Product");
const getUserRouter = require("../Route/GetUser");

// Multer storage for file upload
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Routes
productRoute.post("/products", upload.single("image"), async (req, res) => {
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new product
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: result.secure_url, // Cloudinary image URL
    });

    // Save product to database
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

productRoute.get("/getProduct", async (req, res) => {
  try {
    const allProduct = await Product.find();
    res.json(allProduct);
  } catch (error) {
    res.json({ error });
  }
});

productRoute.get("/product/:productID", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productID);
    res.status(200).json({ product });
  } catch (error) {
    res.json({ error });
  }
});
module.exports = productRoute;
