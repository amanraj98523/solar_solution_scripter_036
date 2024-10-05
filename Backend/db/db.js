const mongoose = require("mongoose");
const mongodbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/pollApp");
    console.log("connected to db");
  } catch (err) {
    console.log("failed to connect to db ", err);
  }
};
module.exports = mongodbConnect;
