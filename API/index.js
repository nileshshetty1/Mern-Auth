import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./Route/userRoute.js";
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

app.use("/api/user", userRoute);
app.listen(3000, () => {
  console.log("server is running");
});
