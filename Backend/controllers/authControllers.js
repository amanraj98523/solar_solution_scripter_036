import userModel from "../models/userModels";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const authModel = require("../models/userModels");

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, name: user.firstName },
    process.env.JWT_SECRET,
    { expiresIn: "5h" }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, name: user.firstName },
    process.env.refresh_secret,
    { expiresIn: "7d" }
  );
};

const signup = async (req, res) => {
  try {
    const { firstName, email, password } = req.body;
    if (!firstName || !email || !password) {
      return res.status(400).send("invalid details");
    }
    const userExist = await userModel.findOne({ email });
    if (!userExist) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const data = new userModel({
        firstName,
        email,
        password: hashedPassword,
      });
      await Date.save();
      res.status(201).json("user already exists");
    } else {
      res.status(400).send("User already exists, try to login");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("internal server error");
  }
};

const login = async (req, res) => {
  try {
    const { firstName, email, password } = req.body;
    //console.log(password, email);

    if (!email || !password) {
      return res.status(400).send("Email and password required");
    }

    const userExist = await Customer.findOne({ email });

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
        res.send("password comparing failed");
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
