const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const postId = req.params.id;
  res.send(commentsByPostId[postId] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const postId = req.params.id;

  const { content } = req.body;

  if (!commentsByPostId[postId]) {
    commentsByPostId[postId] = [];
  }
  const id = randomBytes(4).toString("hex");
  const newComment = { id, content };
  commentsByPostId[postId].push(newComment);

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      postId,
      ...newComment,
    },
  });
  res.status(201).send(commentsByPostId);
});

app.post("/events", (req, res) => {
  console.log("Received event " + req.body.type);

  res.send({});
});

app.listen(4001, () => console.log("comments: listening to port 4001"));
