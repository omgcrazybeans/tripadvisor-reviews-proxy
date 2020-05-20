const { green } = require('colors');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');


/* ======================================= Express server ======================================= */

// create express application
const app = express();

// enable cors
app.use(cors());

// listen
const PORT = 3000;
app.listen(PORT, () => console.log(`CORS-enabled web server listening on port ${green(PORT)}`));

// set the 'Content-Type' that the middleware will parse
app.use(express.json());

// logger
app.use(({ body, method, url }, res, next) => {
  console.log(`${method.yellow} request at ${url.cyan}`);
  console.log(body);

  // next middleware
  next();
});

// serving static file
app.use(express.static(path.join(__dirname, '../client')));
