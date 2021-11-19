const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hola");
});

app.post("/events", (req, res) => {
  const event = req.body;
  console.log("recibido", event);
  res.json("hola envento");
});

app.listen(5002, () => console.log("http://localhost:5002"));
