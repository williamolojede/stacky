'use strict'

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, function() {
  // notify that the app is running
  console.log(`${ process.env.npm_package_name || 'stacky' } is listening on port: ${ port }`);
});

