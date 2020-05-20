const cors = require('cors');
const express = require('express');
const { green } = require('colors');
const path = require('path');
const { Listings } = require('../db/index.js');

/* ======================================= Express server ======================================= */

// create express application
const app = express();
const { RPort: PORT } = require('../../ports.js');

// enable cors
app.use(cors());

// listen
const server = app.listen(PORT, () => console.log(`CORS enabled server listening on PORT ${green(PORT)}`));

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
app.use(express.static(path.join(__dirname, '../client/dist')));


/* ==================================== HTTP request handlers =================================== */

// for '../test/server.test.js'
app.get('/reviews/:id', ({ params: { id } }, res) => {
  Listings.findById(id)
    .then((query) => res.status(200).send(query))
    .catch((err) => res.status(500).send(err));
});

app.get('/reviews', (req, res) => {
  Listings.findOne()
    .then(({ reviews }) => res.status(200).send(reviews))
    .catch((err) => res.status(500).send(err));
});

app.put('/reviews', ({ body: { _id } }, res) => { // nested destructuring
  // console.log(_id);
  // res.status(200).send('PUT resolved')

  Listings.findOne()
    .then((query) => {
      const doc = query;
      doc.reviews.id(_id).helpful += 1; // doc is parent document
      return Listings.findByIdAndUpdate({ _id: _id[0] }, new Listings(doc));
    })
    .then(() => Listings.findOne())
    .then(({ reviews }) => res.status(200).send(reviews)) // update
    .catch((err) => res.status(500).send(err));
});

module.exports = {
  server,
};
