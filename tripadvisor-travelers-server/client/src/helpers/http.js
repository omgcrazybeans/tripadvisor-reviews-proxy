const axios = require('axios');
const { BPort } = require('../../../../ports.js');

module.exports = {
  fetchTripData: (id) => axios.get(`http://localhost:${BPort}/api/trip/${id}/price`)
    .then((response) => response.data),

  fetchPrice: (id, date, adults) => axios.get(`http://localhost:${BPort}/api/trip/${id}/calendar/?startdate=${date}&enddate=${date}&adults=${adults}`)
    .then((response) => response.data),
};

