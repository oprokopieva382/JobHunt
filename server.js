import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";

if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello server");
});

app.post("/", (req, res) => {
  res.json({ message: "data received", data: req.body });
});

app.listen(5100, () => {
  console.log("listen on the port 5100");
});
