const express = require('express');

const router = express.Router();

// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-down
// Vote on a specific answer
router.post('/', (req, res) => {
  const { voteDir } = req;
  if (voteDir === 'up') {
    res.json({
      response: 'Your sent a up vote req',
      questionId: req.questionId,
      answerId: req.answerId,
      body: req.body,
    });
  } else if (voteDir === 'down') {
    res.json({
      response: 'Your sent a down vote req',
      questionId: req.questionId,
      answerId: req.answerId,
      body: req.body,
    });
  }
});

module.exports = router;
