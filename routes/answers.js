const express = require('express');
const vote = require('./vote');

const router = express.Router();

// POST /questions/:qID/answers
// Route for creating an answer
router.post('/', (req, res) => {
  res.json({
    response: 'Your sent a POST req',
    questionId: req.questionId,
    body: req.body,
  });
});

// PUT /questions/:qID/answers/:aID
// Edit a specific answer
router.put('/:aID', (req, res) => {
  res.json({
    response: 'Your sent a POST req',
    questionId: req.questionId,
    answerID: req.params.aID,
    body: req.body,
  });
});

// DELETE /questions/:qID/answers/:aID
// Delete a specific answer
router.delete('/:aID', (req, res) => {
  res.json({
    response: 'Your sent a delete req',
    questionId: req.questionId,
    answerID: req.params.aID,
    body: req.body,
  });
});

// route handler to vote on a specific answer
router.use('/:aID/vote-:dir', (req, res, next) => {
  // pass the question/answer ID and voteDir to vote router
  req.questionId = req.questionId;
  req.answerId = req.params.aID;
  req.voteDir = req.params.dir;
  next();
}, vote);

module.exports = router;
