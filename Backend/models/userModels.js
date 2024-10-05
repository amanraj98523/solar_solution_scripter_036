const mongoose = require("mongoose");
const email = "admin@g.com";
function getRole(email) {
  return email.toLowerCase() === "admin@g.com" ? "admin" : "user";
}

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
    default: getRole(email),
    enum: ["client", "admin", "user"],
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
