//const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const userModel = require("../models/userModels");
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "5h" }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, name: user.name },
    process.env.refresh_secret,
    { expiresIn: "7d" }
  );
};

const signup = async (req, res) => {
  try {
    //console.log(req);
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const all = await userModel.find();
    console.log(all);

    if (!name || !email || !password) {
      return res.status(400).send("invalid details");
    }
    const userExist = await userModel.findOne({ email: email });
    if (!userExist) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const data1 = new userModel({
        name,
        email,
        password: hashedPassword,
      });
      await data1.save();

      res.status(201).json("user already exists");
    } else {
      res.status(400).send("User already exists, try to login");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //console.log(password, email);

    if (!email || !password) {
      return res.status(400).send("Email and password required");
    }

    const userExist = await userModel.findOne({ email });

    if (userExist) {
      try {
        const passCheck = await bcrypt.compare(password, userExist.password);
        console.log("Stored hash:", userExist.password);
        console.log("Password to compare:", password);
        console.log("bycrpt compare", passCheck);
        if (passCheck) {
          const accessToken = generateToken(userExist);
          const refreshToken = generateRefreshToken(userExist);
          userExist.refreshToken = refreshToken;
          await userExist.save();

          res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
          });
          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
          });
          console.log("loginsuccesss");
          res
            .status(200)
            .json({ message: "Login successful", accessToken, refreshToken });
        } else {
          console.log("incorrect password");
          res.status(400).send("Incorrect password");
        }
      } catch (err) {
        console.log(err);
        res.send("password comparing failed", err.message);
      }
    } else {
      console.log("user does not exist");
      res.status(400).send("User does not exist, try to register");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const logout = async (req, res) => {
  const { refreshToken } = req.body;
  try {
    const user = await userModel.findOne({ refreshToken });
    if (user) {
      user.refreshToken = null;
      await user.save();
    }
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "User logout failed", error });
  }
};

const allUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("There is an error in fetching users");
  }
};

const getCustomerById = async (req, res) => {
  const customer = await userModel.findById(req.params.id);

  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
};

const updateCustomer = async (req, res) => {
  console.log("Updating customer with ID:", req.params.id); // Log req.params.id to see if it's undefined
  try {
    const customer = await userModel.findById(req.params.id);

    if (customer) {
      customer.name = req.body.name || customer.name;
      customer.email = req.body.email || customer.email;
      customer.role = req.body.role || customer.role;

      if (req.body.password) {
        customer.password = req.body.password;
      }

      const updatedCustomer = await userModel.save();
      res.json({
        _id: updatedCustomer._id,
        name: updatedCustomer.name,
        email: updatedCustomer.email,
        role: updatedCustomer.role,
      });
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (error) {
    console.error("Error updating customer:", error); // Log error for more details
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const customer = await userModel.findById(req.params.id);

    if (customer) {
      await userModel.deleteOne({ _id: req.params.id });
      res.json({ message: "Customer deleted successfully" });
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  deleteCustomer,
  updateCustomer,
  getCustomerById,
  allUsers,
  logout,
  login,
  signup,
};
