const express = require("express");
const User = require("../Model/User");
const cartRouter = express.Router();

cartRouter.post("/cart", async (req, res) => {
  const { userID, productID, quantity } = req.body;
  try {
    const user = await User.findById(userID);
    const cartProduct = user.cart;
    const existingProduct = cartProduct.findIndex(
      (item) => item.productID.toString() === productID
    );
    if (existingProduct !== -1) {
      user.cart[existingProduct].quantity += quantity;
      user.save();
      res.status(200).json({ message: "product added to cart" });
    } else {
      await User.findByIdAndUpdate(userID, {
        $push: { cart: { productID: productID, quantity: quantity } },
      });
      res.status(200).json({ message: "product added to cart" });
    }
  } catch (error) {
    console.log(error);
  }
});

cartRouter.get("/getCart/:userID", async (req, res) => {
  try {
    const cart = await User.findById(req.params.userID).populate({
      path: "cart",
      populate: {
        path: "productID",
        model: "Product",
      },
    });
    const allCart = cart.cart;
    let totalPrice = 0;
    cart.cart.forEach((item) => {
      totalPrice += item.productID.price * item.quantity;
    });
    res.json({ totalPrice: totalPrice, allCart });
  } catch (error) {
    res.send(error);
  }
});

cartRouter.delete("/cart/:productIdd/:userID", async (req, res) => {
  const { userID, productIdd } = req.params;

  try {
    const user = await User.findById(userID);
    if (!user) {
      return res.json({ message: "User not found" });
    }

    // Filter out the product to be removed from the cart
    user.cart = user.cart.filter((item) => item._id != productIdd);

    await user.save();

    res.json({ message: "Product removed from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

cartRouter.delete("/user/:userID/cart", async (req, res) => {
  const userID = req.params.userID;
  try {
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.cart = [];
    await user.save();

    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.send(error);
  }
});

module.exports = cartRouter;
