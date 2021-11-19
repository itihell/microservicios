const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const axios = require("axios");

const app = express();

let comments = {};

app.use(bodyParser.json());
app.use(cors());

app.get("/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  const postComments = comments[id] || [];
  res.json(postComments);
});
app.post("/posts/:id/comments", (req, res) => {
  const postId = req.params.id;
  const { content } = req.body;
  const id = randomBytes(4).toString("hex");

  const data = {
    id,
    postId,
    content,
  };

  let postComments = comments[postId] || [];
  postComments.push(data);

  const event = {
    type: "CommentCreated",
    data,
  };

  axios.post("http://localhost:6000/events", event);

  comments[postId] = postComments;

  res.json(data);
});

app.post("/events", (req, res) => {
  const event = req.body;
  console.log("recibido", event);
  res.json("hola envento");
});
app.listen(5001, () => console.log("http://localhost:5001"));
