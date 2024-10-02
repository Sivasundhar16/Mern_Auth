import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("connected to the database");
  } catch (err) {
    console.log(err.message);
  }
};
