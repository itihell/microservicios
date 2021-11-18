const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();

let comments = {};

app.use(bodyParser.json());
app.use(cors())

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
  comments[postId] = postComments;

  res.json(data);
});

app.listen(5001, () => console.log("http://localhost:5001"));
