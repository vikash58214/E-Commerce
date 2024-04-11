const express = require("express");
const orderRouter = express.Router();
const Order = require("../Model/Order");

orderRouter.post("/order", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.json(error);
  }
});

orderRouter.get("/viewOrder", async (req, res) => {
  try {
    const viewOrder = await Order.find();
    res.json(viewOrder);
  } catch (error) {
    res.send(error);
  }
});

module.exports = orderRouter;
