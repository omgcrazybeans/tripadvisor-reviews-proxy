const { TripAdvisorActivity } = require('../db/initializer/data/TripAdvisorActivity.js');
const { TripAdvisorPhoto } = require('../db/initializer/data/TripAdvisorPhoto.js');
const { TripAdvisorPhotoCreatorInfo } = require('../db/initializer/data/TripAdvisorPhotoCreatorInfo.js');

describe('Seed Data Activity, Photo, and Info Classes', () => {
  test('Activity Class should have name, location properties', () => {
    const activity = new TripAdvisorActivity();
    const expected = { name: null, location: null };
    expect(activity).toMatchObject(expected);
  });

  test('setActivity method should set name, location with random strings', () => {
    const activity = new TripAdvisorActivity();
    activity.setActivity();
    expect(typeof activity.name).toBe('string');
    expect(typeof activity.location).toBe('string');
  });


  test('Photo Class should have link, alt properties', () => {
    const photo = new TripAdvisorPhoto('photo.jpeg');
    expect(photo).toHaveProperty('link');
    expect(photo).toHaveProperty('alt');
    expect(typeof photo.link).toBe('string');
    expect(typeof photo.alt).toBe('string');
  });

  test('Creator Info Class should have 7 properties', () => {
    const info = new TripAdvisorPhotoCreatorInfo();
    const expected = {
      user: null,
      user_contributions: null,
      date_created: null,
      review_title: null,
      review_description: null,
      review_stars: null,
      review_helpful_score: null,
    };
    expect(info).toMatchObject(expected);
  });

  test('createdByManagement method should set CreatorInfo Class properties with values or null', () => {
    const info = new TripAdvisorPhotoCreatorInfo();
    info.createdByManagement();
    const user = typeof info.user === 'string' || info.user === null;
    const userContributions = typeof info.user_contributions === 'number' || info.user_contributions === null;
    const dateCreated = typeof info.date_created === 'string' || info.date_created === null;
    const reviewTitle = typeof info.review_title === 'string' || info.review_title === null;
    const reviewDescription = typeof info.review_description === 'string' || info.review_description === null;
    const reviewStars = typeof info.review_stars === 'number' || info.review_stars === null;
    const reviewHelpfulScore = typeof info.review_helpful_score === 'number' || info.review_helpful_score === null;

    expect(user).toBe(true);
    expect(userContributions).toBe(true);
    expect(dateCreated).toBe(true);
    expect(reviewTitle).toBe(true);
    expect(reviewDescription).toBe(true);
    expect(reviewStars).toBe(true);
    expect(reviewHelpfulScore).toBe(true);
  });

  test('createdByUser method should set CreatorInfo Class properties with values or null', () => {
    const info = new TripAdvisorPhotoCreatorInfo();
    info.createdByUser();
    const user = typeof info.user === 'string' || info.user === null;
    const userContributions = typeof info.user_contributions === 'number' || info.user_contributions === null;
    const dateCreated = typeof info.date_created === 'string' || info.date_created === null;
    const reviewTitle = typeof info.review_title === 'string' || info.review_title === null;
    const reviewDescription = typeof info.review_description === 'string' || info.review_description === null;
    const reviewStars = typeof info.review_stars === 'number' || info.review_stars === null;
    const reviewHelpfulScore = typeof info.review_helpful_score === 'number' || info.review_helpful_score === null;

    expect(user).toBe(true);
    expect(userContributions).toBe(true);
    expect(dateCreated).toBe(true);
    expect(reviewTitle).toBe(true);
    expect(reviewDescription).toBe(true);
    expect(reviewStars).toBe(true);
    expect(reviewHelpfulScore).toBe(true);
  });
});
