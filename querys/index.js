const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const posts = {};

app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    posts[data.id] = {
      ...data,
      comments: [],
    };
  }

  if (type === "CommentCreated") {
    const { id, content, postId } = data;
    comentario = {
      id,
      postId,
      content,
    };
    posts[postId].comments.push(comentario);
  }
  console.log("recibido", posts);

  res.json("hola envento");
});

app.listen(5002, () => console.log("http://localhost:5002"));
