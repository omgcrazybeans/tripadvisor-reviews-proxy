// Accepts an odds variable, which indicates that a situation should occur a certain % of the time
// Returns a boolean indicating whether a certain situation occurred
// Ex: odds = 0.1, return true 10% of the time, and false 90% of the time
const generateProbabilityDecision = (odds) => {
  const oddsAsPercent = odds * 100;
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber < oddsAsPercent;
};

const convertJavaScriptDateToMySQL = (date) => {
  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);

  return `${year}/${month}/${day}`;
};

module.exports.generateProbabilityDecision = generateProbabilityDecision;
module.exports.convertJavaScriptDateToMySQL = convertJavaScriptDateToMySQL;
