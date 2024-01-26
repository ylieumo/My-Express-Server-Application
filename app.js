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
  res.send('Hello there! This my quiz page from homepage ')
})


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/quizQuery',(req, res) => {
  res.render('quiz', {data : {quizQuery: req.params.quizQuery}});
});




 

app.listen( port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
  });