import express from "express";
import mongoose from "mongoose"; // Remove { get } from here
import dotenv from "dotenv";
import userRouter from "./Routes/user.routes.js"; // Import user routes
import authRouter from "./Routes/auth.router.js"; // Import auth routes
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
app.use(express.json()); // Middleware to parse JSON bodies


app.use('/api/user' , userRouter); // Use user routes under /api/
app.use('/api/auth' , authRouter); // Use auth routes under /api/ 

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

