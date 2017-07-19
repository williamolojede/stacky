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


const port = process.env.PORT || 3000;

app.listen(port, () => {
  // notify that the app is running
  console.log(`${process.env.npm_package_name || 'stacky'} is listening on port: ${port}`);
});

