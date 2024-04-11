const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
  quantity: { type: Number },
});
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  cart: [cartSchema],
});

const adminModel = mongoose.model("User", adminSchema);

module.exports = adminModel;
