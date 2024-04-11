const express = require("express");
const app = express();
const Authrouter = require("./Route/Auth");
const getUserRouter = require("./Route/GetUser");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoute = require("./Route/AddProduct");
const cartRouter = require("./Route/Cart");
const orderRouter = require("./Route/Order");
require("dotenv").config();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch(() => {
    console.log("not connected to mongoDB");
  });

app.use(express.json());
app.use(Authrouter);
app.use(getUserRouter);
app.use(productRoute);
app.use(cartRouter);
app.use(orderRouter);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "Client", "dist")));
  res.sendFile(path.resolve(__dirname, "Client", "dist", "index.html"));
});

app.listen(3000, () => {
  console.log("server running");
});
