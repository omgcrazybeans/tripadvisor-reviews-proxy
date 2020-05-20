const express = require('express');
const cors = require('cors');
const path = require('path');
const { getGalleryForActivityId } = require('./controllers');
const { GPort } = require('../../ports.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/tripAdvisor/:activityId/gallery', getGalleryForActivityId);

app.listen(GPort, () => console.log(`Server is running on Port ${GPort}...`));

module.exports = app;
