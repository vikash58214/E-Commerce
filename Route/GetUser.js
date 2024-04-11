const express = require("express");
const adminModel = require("../Model/User");
const getUserRouter = express.Router();

getUserRouter.get("/getUser/:userID", async (req, res) => {
  try {
    const user = await adminModel.findById(req.params.userID);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

module.exports = getUserRouter;
