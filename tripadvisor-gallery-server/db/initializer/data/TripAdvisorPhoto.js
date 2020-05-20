const faker = require('faker');

const TripAdvisorPhoto = function(link) { // eslint-disable-line
  this.link = link;
  this.alt = faker.lorem.words();
};

module.exports.TripAdvisorPhoto = TripAdvisorPhoto;
