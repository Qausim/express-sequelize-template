const dotenv = require('dotenv');

dotenv.config();

module.exports = ((env) => ({
  devDbUrl: env.DEV_DB_URL,
  testDbUrl: env.TEST_DB_URL,
}))(process.env);
