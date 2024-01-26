const express = require("express");
const router = express.Router();

const users = require("../data/comments");
const error = require("../utilities/error");


router 
.route("/comments")

.get((req, res) => {
    res.json(comments);
  });

  .post((req, res) => {
    const { quizId, postId, body } = req.body;
  
    if (!quizId || !postId || !body) {
      return res.status(400).json({ error: 'userId, postId, and body are required fields' });
    }
  
    const newCommentId = comments.length + 1;

    const newComment = {
      id: newCommentId,
      quizId: userId,
      postId: postId,
      body: body,
    };
  
    comments.push(newComment);
    res.status(201).json(newComment);
  });

module.exports = router;