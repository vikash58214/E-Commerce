const express = require("express");
const adminModel = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Authrouter = express.Router();

const { check, validationResult } = require("express-validator");

Authrouter.post(
  "/signup",
  [
    check("name", "Enter valid name").isLength({ min: 3 }),
    check("phone", "Enter valid phone number").isLength({
      min: 10,
      max: 10,
    }),
    check("email", "Enter valid email").isEmail(),
    check("password", "Enter valid password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    const { email, name, phone, password } = req.body;
    if (!error.isEmpty()) {
      const validError = error.array();
      return res.json({ validation: validError });
    }
    try {
      const user = await adminModel.findOne({ email });
      if (user) {
        res.send({ message: "user already exist" });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await adminModel.create({
          name,
          phone,
          email,
          password: hashedPassword,
        });

        res.status(200).json({ message: "Signup Success" });
      }
    } catch (error) {
      console.log(error);
    }
  }
);

Authrouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await adminModel.findOne({ email });
    if (!user) {
      res.json({ message: "user not found" });
    } else {
      const matchedPassword = await bcrypt.compare(password, user.password);
      if (matchedPassword) {
        const token = jwt.sign({ userID: user._id }, "secret");
        res.json({ token, userID: user._id, message: "login success" });
      } else {
        res.json({ message: "invalid password" });
      }
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = Authrouter;
