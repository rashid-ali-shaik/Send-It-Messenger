require("dotenv").config();

const utils = {
  connectionString: process.env.MONGO_URI,
  port: process.env.PORT,
  env: process.env.ENVIRONMENT,
  jwtSecret: process.env.JWT_SECRET,
  jwtLifeTime: process.env.JWT_LIFETIME,
};

module.exports = Object.freeze(utils);
