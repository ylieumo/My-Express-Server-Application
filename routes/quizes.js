const express = require("express");
const router = express.Router();

const quizes = require("../data/quizes");
const error = require("../utilities/error");


// all routes in here are starting with /quizes 
router.get('/', (req, res) => {
    console.log(quizes);
    res.send(quizes);
});


router.post('/', (req, res) =>{
    if (req.body.question && req.body.options && req.body.correctAnswer) {
        if (quizes.find((q) => q.options == req.body.options)) {
          res.json({ error: "options correct" });
          return;
        }
        const quiz = {
            id: quizes[quizes.length - 1].id + 1,
            question: req.body.question,
            options: req.body.options,
            correctAnswer: req.body.correctAnswer,
          };
          quizes.push(quizes);
          res.json(quizes[quizes.length - 1]);
        } else res.json({ error: "Insufficient Data" });

});


router.get('/:id', (req, res) => {
    const quiz = quizes.find((q) => q.id == req.params.id);
    if (quiz) res.json(quiz);
    else next();
  })

router.delete('/:id', (req, res) =>{
    const quiz = quizes.find((q, i) => {
        if (q.id == req.params.id) {
          quizes.splice(i, 1);
          return true;
          res.send(`quiz with the is ${id}deleted from the database`)
        }
      });
  
      if (quiz) res.json(quiz);
      else next();
})

router.patch('/:id', (req, res) => {
    const quiz = quizes.find((q, i) => {
        if (q.id == req.params.id) {
            if (question){
                quiz.question = question
            }
            if (options){
                quiz.options = options
            }
            if (correctAnswer){
                quiz.correctAnswer = correctAnswer
            }
         res.send(`Quiz with the id ${id} has been updated`)
        }
      });
  
    })












module.exports = router;