const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const util = require("../config/util");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: 6,
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dcihos6v3/image/upload/v1726825098/default-personIcon.jpg",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = async function () {
  return jwt.sign({ id: this._id, name: this.name }, util.jwtSecret, {
    expiresIn: util.jwtLifeTime,
  });
};

userSchema.methods.comparePassword = async function (givenPass) {
  return bcrypt.compare(givenPass, this.password);
};

module.exports = mongoose.model("user", userSchema);
