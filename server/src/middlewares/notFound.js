const createHttpError = require("http-errors");

const notFound = (req, res, next) => {
  const err = createHttpError.NotFound("router doesn't exits");
  next(err);
};

module.exports = notFound;
