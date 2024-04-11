const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  address: {
    fullname: { type: String, required: true },
    country: { type: String, required: true },
    landMark: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin: { type: Number, required: true },
    number: { type: Number, required: true },
    email: { type: String, required: true },
  },

  orderDetails: {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    productDetails: [
      {
        productID: {
          type: mongoose.Schema.Types.ObjectId,
          require: true,
          ref: "product",
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
