import express from "express";

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
