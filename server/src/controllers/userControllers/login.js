const createHttpError = require("http-errors");
const USER = require("../../models/userModel");
const { StatusCodes } = require("http-status-codes");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) return next(createHttpError.BadRequest("please provide email"));
  if (!password)
    return next(createHttpError.BadRequest("please provide password"));

  const user = await USER.findOne({ email });

  if (!user) {
    return next(
      createHttpError.BadRequest("user didn't exists please register")
    );
  }

  // checking the password with hashed password by bcrypt compare.
  const isPasswordTrue = await user.comparePassword(password);
  if (!isPasswordTrue) {
    return next(
      createHttpError.BadRequest("please check password it's incorrect")
    );
  }

  // creating a token after logged in
  const token = await user.createJWT();

  res.status(StatusCodes.OK).json({ message: "successfully logged in", token });
};

module.exports = login;
