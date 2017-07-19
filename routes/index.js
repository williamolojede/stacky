const express = require('express');
const answers = require('./answers');

const router = express.Router();

// GET /questions
// Route for questions collection
router.get('/', (req, res) => {
  res.json({ response: 'You sent a GET req' });
});

// POST /questions
// Route for creating questions
router.post('/', (req, res) => {
  res.json({
    response: 'You sent a POST req',
    body: req.body,
  });
});

// GET /questions/:qID
// Route for specific questions
router.get('/:qID', (req, res) => {
  res.json({
    response: `You sent a GET req for ${req.params.qID}`,
  });
});

// ROUTE HANDLER for answers related route
router.use('/:qID/answers', (req, res, next) => {
  // pass the question ID to answers router
  req.questionId = req.params.qID;
  next();
}, answers);

module.exports = router;
