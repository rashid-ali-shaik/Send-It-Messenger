const createHttpError = require("http-errors");
const USER = require("../../models/userModel");
const { StatusCodes } = require("http-status-codes");
const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  console.log(req.body);
  return;
  // throwing an error if any value misses
  if (!name) return next(createHttpError.BadRequest("please provide name"));
  if (!email) return next(createHttpError.BadRequest("please provide email"));
  if (!password)
    return next(createHttpError.BadRequest("please provide password"));

  // we can find email in db and throw the error.

  // handled the unique error in global error
  const user = await USER.create(req.body);
  const token = await user.createJWT();

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: `user created successfully with an id ${user?._id}`,
    token,
  });
};

module.exports = register;
