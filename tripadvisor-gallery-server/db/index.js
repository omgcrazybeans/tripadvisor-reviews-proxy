const mysql = require('mysql');
let { mysqlConfig } = require('../config.js');

// Re-assign mysqlConfig to default params with no password if config file is not present
mysqlConfig = mysqlConfig || { host: 'localhost', user: 'root', database: 'tripAdvisorGallery' };

const db = mysql.createConnection(mysqlConfig);
db.connect((err) => {
  if (err) {
    throw new Error(err);
  } else { // eslint-disable-next-line no-console
    console.log(`Successfully connected to ${mysqlConfig.database} database...`);
  }
});

module.exports = db;
