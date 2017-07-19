const express = require('express');

const router = express.Router();

// validate vote url
const validateURL = (req, res, next) => {
  const { voteDir } = req;
  if (voteDir === 'up' || voteDir === 'down') {
    next();
  } else {
    const err = new Error('Not Found');
    err.status = 400;
    next(err);
  }
};

// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-down
// Vote on a specific answer
router.post('/', validateURL, (req, res) => {
  const { voteDir } = req;
  if (voteDir === 'up') {
    res.json({
      response: 'Your sent a up vote req',
      questionId: req.questionId,
      answerId: req.answerId,
      body: req.body,
    });
  } else {
    res.json({
      response: 'Your sent a down vote req',
      questionId: req.questionId,
      answerId: req.answerId,
      body: req.body,
    });
  }
});

module.exports = router;
