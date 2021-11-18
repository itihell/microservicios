const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();

app.use(bodyParser.json());

let post = {};

app.get("/", (req, res) => {
  const data = {
    version: "0.0.1",
    endpoint: "posts",
    descripcion: "EndPoind API",
  };
  res.json({ rows: data });
});

app.get("/posts", (req, res) => {
  res.json(post);
});

app.post("/posts", (req, res) => {
  const { title } = req.body;
  const id = randomBytes(4).toString("hex");
  post[id] = {
    id,
    title,
  };
  res.json({ id, title });
});

app.listen(5000, () => console.log("http://localhost:5000"));
