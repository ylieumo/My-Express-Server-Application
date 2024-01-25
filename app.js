const express = require("express");
const bodyParser = require("body-parser");

const quizesRoutes  = require("./routes/quizes");
const posts = require("./routes/posts");
const comments = require("./routes/comments")
const error = require("./utilities/error");

const app = express();
const port = 3000;

// Parsing Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/quizes', quizesRoutes);

// test
app.get('/', (req, res) => {
  res.send('Hello world from hamepage ')
})



// app.set('view engine', 'ejs');
// app.get('/',(request, response) => {
//   response.render('index',{ message: "Hello world"})
// })

// const quizesRoutes  = require("./routes/quizes");
// const posts = require("./routes/posts");
// const comments = require("./routes/comments")
// const error = require("./utilities/error");


// app.get('/quiz/:id', (req, res) => {
//   const quizId = req.params.id;
//   res.render('quiz', { quizId });
// });
 

app.listen( port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
  });