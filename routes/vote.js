const express = require('express');

const router = express.Router();

// validate vote url
const validateURL = (req, res, next) => {
  const { voteDir } = req;
  if (voteDir === 'up' || voteDir === 'down') {
    req.vote = voteDir;
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
router.post('/', validateURL, (req, res, next) => {
  req.answer.vote(req.vote, (err, question) => {
    if (err) return next(err);
    res.json(question);
  });
});

module.exports = router;
