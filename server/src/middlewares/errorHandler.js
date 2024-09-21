const util = require("../config/util");

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ? err.statusCode : 500;

  // handled unique email dbError
  if (err?.errorResponse?.code == 11000) {
    return res.status(statusCode).json({
      message: `Email "${err?.errorResponse?.keyValue?.email}" already exists please enter unique email`,
      err: util.env === "production" ? null : err.stack,
    });
  }

  res.status(statusCode).json({
    message: err.message,
    err: util.env === "production" ? null : err.stack,
  });
};

module.exports = errorHandler;
