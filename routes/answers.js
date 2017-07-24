const express = require('express');
const vote = require('./vote');

const router = express.Router();

router.param('aID', (req, res, next, id) => {
  req.answer = req.question.answers.id(id);
  if (!req.answer) {
    const err = new Error('Not Found');
    err.status = 404;
    return next(err);
  }
  return next();
});

// POST /questions/:qID/answers
// Route for creating an answer
router.post('/', (req, res, next) => {
  req.question.answers.push(req.body);
  req.question.save((err, question) => {
    if (err) return next(err);
    res.status(201);
    res.json(question);
  });
});

// PUT /questions/:qID/answers/:aID
// Edit a specific answer
router.put('/:aID', (req, res, next) => {
  req.answer.update(req.body, (err, result) => {
    if (err) return next(err);
    res.json(result);
  });
});

// DELETE /questions/:qID/answers/:aID
// Delete a specific answer
router.delete('/:aID', (req, res, next) => {
  req.answer.remove((err) => {
    if (err) return next(err);
    req.question.save((err, question) => {
      if (err) return next(err);
      res.json(question);
    });
  });
});

// route handler to vote on a specific answer
router.use('/:aID/vote-:dir', (req, res, next) => {
  // pass the question/answer ID and voteDir to vote router
  req.voteDir = req.params.dir;
  next();
}, vote);

module.exports = router;
