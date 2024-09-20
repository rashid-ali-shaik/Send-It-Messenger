require("dotenv").config();

const utils = {
  connectionString: process.env.MONGO_URI,
  port: process.env.PORT,
};

module.exports = Object.freeze(utils);
