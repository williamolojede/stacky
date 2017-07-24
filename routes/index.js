const express = require('express');
const answers = require('./answers');
const Question = require('../models');

const router = express.Router();

router.param('qID', (req, res, next, id) => {
  Question.findById(id, (err, doc) => {
    if (err) return next(err);
    if (!doc) {
      const err = new Error('Not Found');
      err.status = 404;
      return next(err);
    }
    req.question = doc;
    return next();
  });
});

// GET /questions
// Route for questions collection
router.get('/', (req, res, next) => {
  Question.find({})
    .sort({ createdAt: -1 })
    .exec((err, questions) => {
      if (err) return next(err);
      res.json(questions);
    });
});

// POST /questions
// Route for creating questions
router.post('/', (req, res, next) => {
  const question = new Question(req.body);
  question.save((err, question) => {
    if (err) return next(err);
    res.status(201);
    res.json(question);
  });
});

// GET /questions/:qID
// Route for specific questions
router.get('/:qID', (req, res) => {
  res.json(req.question);
});

// ROUTE HANDLER for answers related route
router.use('/:qID/answers', answers);

module.exports = router;
