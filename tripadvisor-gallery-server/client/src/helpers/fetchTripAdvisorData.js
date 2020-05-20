const { GPort } = require('../../../../ports.js'); 

const fetchTripAdvisorData = (callback) => {
  const activityId = Math.floor(Math.random() * 100);
  fetch(`http://127.0.0.1:${GPort}/tripAdvisor/${activityId}/gallery`)
    .then((res) => res.json())
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => callback(err));
};

export default fetchTripAdvisorData;
