const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    default: "user",
    enum: ["client", "admin", "user"],
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
