const faker = require('faker');
const { generateProbabilityDecision, convertJavaScriptDateToMySQL } = require('../helpers');

const TripAdvisorPhotoCreatorInfo = function() { // eslint-disable-line
  this.user = null; // Created by this user: either user or management
  this.user_contributions = null; // # of contributions by a user (null for management)
  this.date_created = null; // Date when photo was created
  this.review_title = null; // Title of the review
  this.review_description = null; // Description of the review
  this.review_stars = null; // # of stars for the review
  this.review_helpful_score = null; // helpful_score for a reviews
};

TripAdvisorPhotoCreatorInfo.prototype.createdByManagement = function() { // eslint-disable-line
  // DEFAULT MANAGEMENT PROPERTY
  this.user = 'Management';
  this.date_created = convertJavaScriptDateToMySQL(faker.date.between('2010', '2015'));

  // MANAGEMENT UPLOADS WITH ADDITIONAL INFORMATION (i.e. not a stock image)
  if (generateProbabilityDecision(0.5)) { // Management generates non-stock images 50% of time
    this.review_title = faker.lorem.words();
    this.review_helpful_score = Math.ceil(Math.random() * 10);
  }
};

TripAdvisorPhotoCreatorInfo.prototype.createdByUser = function() { // eslint-disable-line
  // DEFAULT USER PROPERTIES
  this.user = faker.name.findName();
  this.user_contributions = Math.floor(Math.random() * 10);
  this.date_created = convertJavaScriptDateToMySQL(faker.date.between('2015', '2020'));
  this.review_title = faker.lorem.words();

  // USER UPLOADS IMAGE WITH REVIEW
  if (generateProbabilityDecision(0.8)) { // Users generate reviews w/ photos 80% of the time
    this.review_description = faker.lorem.sentences();
    this.review_stars = Math.ceil(Math.random() * 5);
    this.review_helpful_score = Math.ceil(Math.random() * 10);
  }
};


module.exports.TripAdvisorPhotoCreatorInfo = TripAdvisorPhotoCreatorInfo;
