const express = require("express");
const {
  deleteCustomer,
  updateCustomer,
  getCustomerById,
  allUsers,
  logout,
  login,
  signup,
} = require("../controllers/authControllers");
const authRouter = express.Router();
const userModel = require("../models/userModels");

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.patch("/update/:id", updateCustomer);
authRouter.delete("/delete/:id", deleteCustomer);

authRouter.get("/", async (req, res) => {
  try {
    const data = await userModel.find();
    res.send({ data });
  } catch (err) {
    res.send({ err: err.message });
  }
});

module.exports = authRouter;
