import "express-async-errors"; // must be first
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import jobRouter from "./routes/jobRouter.js";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello server");
});

app.post("/", (req, res) => {
  res.json({ message: "data received", data: req.body });
});

app.use("/api/v1/jobs", jobRouter);

//PAGE NOT FOUND
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

//ERROR
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});

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
