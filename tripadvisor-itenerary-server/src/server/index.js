let http = require('http');
const app = require('./routes');
const models = require('./database/models/index');
const seed = require('./database/seeddatabase');
const controller = require('./database/controller');
const { IPort } = require('../../../ports.js'); 

http = http.Server(app);

const sequelizeOptions = { force: process.env.FORCE_TRUNCATE || false };

// If force is true, Sequelize will drop all tables and re-add whatever is in models
// when the server starts.  This option should be put to 'false' in production!

app.set('sqlport', process.env.SQLPORT || 5432);

app.listen(process.env.PORT || IPort, () => {
  console.log(`Express server listening on port ${IPort}.`);
});

models.sequelize.sync(sequelizeOptions).then(() => {
  const server = http.listen(app.get('sqlport'), () => {
    console.log(`SQL server on ${server.address().port}`);

    models.Tour.count()
      .then((results) => {
        if (results < 100) {
          seed(models);
        } else {
          console.log('\x1b[32m%s\x1b[0m', `${results} rows found in Tours table: database seed script will not run.`);
        }
      })
      .catch((error) => console.error(error));
  });
})
  .catch((error) => {
    console.error(error);
  });
