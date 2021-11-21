const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());
app.use(cors());
const noPermitido = "puta";

let events = [];

app.get("/events", (req, res) => {
  res.json(events);
});

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  let event = {};

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;

    const newStatus = content.toLowerCase().includes(noPermitido)
      ? "Rechazado"
      : "Aprobado";

     event = {
      type: "CommentModerated",
      data: {
        id,
        content,
        postId,
        status: newStatus,
      },
    };
    axios.post("http://localhost:6000/events", event);
  }

  console.log(event);

  res.json(event);
});

app.listen(5003, () => console.log("http://localhost:5003"));
