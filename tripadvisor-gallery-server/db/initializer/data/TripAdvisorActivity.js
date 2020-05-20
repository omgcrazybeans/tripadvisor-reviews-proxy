const faker = require('faker');

const TripAdvisorActivity = function() { // eslint-disable-line
  // Information related to the Activity
  this.name = null;
  this.location = null;
};

// An Activity should be set for every single instance of TripAdvisorGallerySeedData
TripAdvisorActivity.prototype.setActivity = function() { // eslint-disable-line
  this.name = faker.lorem.sentence();
  this.location = faker.address.country();
};

module.exports.TripAdvisorActivity = TripAdvisorActivity;
