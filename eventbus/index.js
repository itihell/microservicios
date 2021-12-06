const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());
app.use(cors());

let events = [];

app.get("/events", (req, res) => {
  res.json(events);
});

app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);

  console.log(event);

  axios.post("http://localhost:5000/events", event); //POST
  axios.post("http://localhost:5001/events", event); //Comments
  axios.post("http://localhost:5002/events", event); //Quersys
  axios.post("http://localhost:5003/events", event); //moderador

  res.json(event);
});

app.listen(5005, () => console.log("http://localhost:5005"));
