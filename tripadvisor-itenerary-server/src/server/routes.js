const express = require('express');
const path = require('path');
const ctlr = require('./database/controller');
const { IPort } = require('../../../ports.js');

const app = express();

app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
app.use('/image/', express.static(path.join(__dirname, '..', 'public', 'img')));

app.get(`http://localhost:${IPort}/tour/:id`, (req, res) => {
  // This route will look up a tour by ID and send the relevant data.

  const { params: { id } } = req;
  // this is const id = req.params.id but it's defined using destructuring
  // https://exploringjs.com/impatient-js/ch_destructuring.html#object-destructuring
  ctlr.getTour(id, (err, data) => {
    if (err) {
      console.error(err);
      res.writeHead(500);
      res.end();
      return;
    }
    res.writeHead(200);
    res.end(JSON.stringify(data));
  });
});

app.get(`http://localhost:${IPort}/tour`, (req, res) => {
  // This route will look up a tour by ID and send the relevant data.
  ctlr.getRandomTour((err, data) => {
    if (err) {
      console.error(err);
      res.writeHead(500);
      res.end();
      return;
    }
    res.writeHead(200);
    res.end(JSON.stringify(data));
  });
});

app.get(`http://localhost:${IPort}/*`, (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

module.exports = app;
