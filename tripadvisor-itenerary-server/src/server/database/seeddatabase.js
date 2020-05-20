const _ = require('underscore');
const faker = require('faker');
const fs = require('fs');
const path = require('path');

module.exports = function (models) {
  const cancellationPolicies = [
    'For a full refund, cancel at least 24 hours in advance of the start date of the experience.',
    'Full refunds available for a very reasonable processing fee equal to admission price.',
    'All sales are final and incur 100% cancellation penalties.',
    'We will come for you if you try to cancel on us.',
  ];

  const returnDetails = [
    'Returns to the original departure point',
    'Those who fall behind stay behind',
    'The rendezvous will be disclosed by carrier pigeon',
  ];

  const lead = ['Enjoy A', 'Go On A', 'Take A', 'Beautiful', 'Windy', 'Wonderful', 'Starlight', 'Chaperoned', 'Virtual'];
  const conveyance = ['Walking', 'Beautiful', 'Bus', 'Bike', 'Hiking', 'Go-Kart', 'Wine Tour', 'Daydrinking', 'Strolling'];
  const tourTitleChunk = ['Tour Of', 'Through', 'Across', 'Around'];
  const localeName = ['San Francisco', 'SF', 'The Big Fran', 'The 7 x 7', 'Bay City'];

  const coords = {
    north: 37.788915,
    east: -122.390197,
    south: 37.722464,
    west: -122.503719,
  };

  // Acquire file paths to images on disk
  var images = [];
  const imagefolder = path.resolve(__dirname, '..', '..', 'public', 'img', 'gallery');

  fs.readdirSync(imagefolder)
    .forEach((filename) => {
      images.push(filename);
    });

  function pickrand(array) {
    const max = array.length -1;
    const i = _.random(0, max);
    return array[i];
  }

  function makeTitle() {
    const myLead = pickrand(lead);
    const myConveyance = pickrand(conveyance);
    const myTitlechunk = pickrand(tourTitleChunk);
    const myLocale = pickrand(localeName);
    const title = `${myLead} ${myConveyance} ${myTitlechunk} ${myLocale}`;
    return title;
  }

  // Make a batch of tours:
  const tours = [];
  for (let i = 0; i < 100; i += 1) {
    const tour = {
      name: makeTitle(),
      overview: faker.lorem.sentences(),
      cancellation_policy: pickrand(cancellationPolicies),
      return_details: pickrand(returnDetails),
    };
    tours.push(tour);
  }

  // Make a batch of attractions:
  const attractions = [];
  for (let i = 0; i < 500; i += 1) {
    const attraction = {
      name: faker.lorem.words(),
      latitude: Math.random() * (coords.north - coords.south) + coords.south,
      longitude: Math.random() * (coords.east - coords.west) + coords.west,
      description: faker.lorem.sentences(),
      rating: (Math.random(5 - 3) + 1).toFixed(1),
      image_path: pickrand(images),
      image_alt: faker.lorem.words(),
    };
    attractions.push(attraction);
  }

  // Stick that into the database
  models.Attraction.bulkCreate(attractions,
    {
      updateOnDuplicate: ['name'],
    })
    .then(() => {
      models.Tour.bulkCreate(tours, {
        updateOnDuplicate: ['name'],
      });
    })
    .then(() => {
      for (let i = 0; i < 500; i += 1) {
        // A given tour is going to have an ID between 1 and 100
        const tour_id = _.random(1, 100);
        // a given attraction will have an ID between 1 and 500
        const attraction_id = i;
        models.Attraction.findOne({
          where: { id: attraction_id },
        })
          .then((attraction) => {
            models.Tour.findOne({
              where: {
                id: tour_id,
              },
            })
              .then((tour) => {
                tour.addAttraction(attraction);
              })
              .catch((error) => {
                console.error(error);
              });
          });
      }
    });
};
