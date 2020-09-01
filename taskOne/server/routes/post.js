const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/save", (req, res) => {


  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(422).json({ error: "Please fiilup all input" });
  }

  const post = new Post({
    title,
    body,
  });
  post
    .save()
    .then((user) => {
      res.json({ message: "Post Successfuly" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
