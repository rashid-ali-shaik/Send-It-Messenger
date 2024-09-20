const createHttpError = require("http-errors");

const notFound = (req, res, next) => {
  const err = createHttpError("404", "route doesn't exits");
  next(err);
};

module.exports = notFound;
