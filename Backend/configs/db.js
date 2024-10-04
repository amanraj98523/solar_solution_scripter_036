import mongoose from "mongoose";
import {} from "dotenv/config";

const connetDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected MongoDb`);
  } catch (err) {
    console.log(err);
  }
};

export default connetDB;
