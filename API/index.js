import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./Route/userRoute.js";
import authRoute from "./Route/authRoute.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to database MongoDB");
  })
  .catch((err) => {
    console.log("couldn't connect to the database MongoDB");
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error!";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(3000, () => {
  console.log("server is running");
});
