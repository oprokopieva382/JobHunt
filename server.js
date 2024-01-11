import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
// import { nanoid } from "nanoid";

// let jobs = [
//   { id: nanoid(), company: "apple", position: "front-end" },
//   { id: nanoid(), company: "google", position: "back-end" },
// ];

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

//GET ALL JOBS
app.get("/api/v1/jobs", );

//CREATE JOB
app.post("/api/v1/jobs", );

//GET SINGLE JOB
app.get("/api/v1/jobs/:id", );

//EDIT JOB
app.patch("/api/v1/jobs/:id", );

//DELETE JOB
app.delete("/api/v1/jobs/:id", );

//PAGE NOT FOUND
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

//ERROR
app.use((err, req, res, next)=> {
  console.log(err)
  res.status(500).json({msg: "something went wrong"})
})

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`listen on the port ${PORT}`);
});
