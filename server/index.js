import express from "express";
const app = express();
import { connectDB } from "./database/database.js";
import router from "./routes/routes.js";
import dotenv from "dotenv";
dotenv.config();

app.use(express.json());

app.use("/api/auth", router);

const PORT = process.env.PORT || 5000;

try {
  connectDB();
  app.listen(PORT, () => {
    console.log("server is running on port");
  });
} catch (error) {
  console.log(error.message);
}
