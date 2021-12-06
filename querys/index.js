const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: axios } = require("axios");

const app = express();

const posts = {};

app.use(bodyParser.json());
app.use(cors());

const handleEvents = (type, data) => {
  if (type === "PostCreated") {
    posts[data.id] = {
      ...data,
      comments: [],
    };
  }

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    comentario = {
      id,
      postId,
      content,
      status,
    };
    posts[postId].comments.push(comentario);
  }

  if (type === "CommentModerated") {
    const { id, content, postId, status } = data;
    const index = posts[postId].comments.findIndex((item) => item.id === id);
    console.log(index);
    posts[postId].comments[index].status = status;
  }
};

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvents(type, data);
  console.log("recibido", posts);

  res.json("hola envento");
});

app.listen(5002, async () => {
  console.log("http://localhost:5002");

  const resp = await axios.get("http://localhost:5005/events");
  //console.log(resp);
  const events = resp.data;
  for (const event of events) {
    const { type, data } = event;
    handleEvents(type, data);
  }
});
