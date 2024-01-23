const express = require("express");
const bodyParser = require("body-parser");

// const quizData  = require("./routes/quizData");
// const posts = require("./routes/posts");
// const comment = require("./route/comments")

const error = require("./utilities/error");

const app = express();
const port = 3000;





app.listen( port, () => {
    console.log(`Server is running on port ${port}`);
  });