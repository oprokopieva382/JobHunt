import "express-async-errors"; // must be first
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware.js";
import { login, register } from "./controllers/authController.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello server");
});

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

app.use("/register", register);
app.use("/login", login);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authMiddleware, userRouter);
app.use("/api/v1/jobs", authMiddleware, jobRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

//PAGE NOT FOUND
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

//MIDDLEWARE ERROR
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log(`listen on the port ${PORT}`);
  });
} catch (err) {
  console.log(err);
  process.exit(1);
}
