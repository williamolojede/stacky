const express = require('express');
const jsonParser = require('body-parser').json;
const logger = require('morgan');
const routes = require('./routes');

const app = express();

// MIDDLEWARES
app.use(jsonParser());
app.use(logger('dev'));

// ROUTES
app.use('/questions', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // notify that the app is running
  console.log(`${process.env.npm_package_name || 'stacky'} is listening on port: ${port}`);
});

