import express from "express";
import mongoose from "mongoose"; // Remove { get } from here
import dotenv from "dotenv";
import userRouter from "./Routes/user.routes.js"; // Import user routes
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();


app.use('/api/user' , userRouter); // Use user routes under /api/

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

