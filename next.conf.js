require('dotenv').config();

module.exports = {
  env: {
    MONGO_DB_URI: process.env.MONGO_DB_URI,
  },
};
