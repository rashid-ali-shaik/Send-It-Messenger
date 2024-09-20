const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
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
  },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dcihos6v3/image/upload/v1726825098/default-personIcon.jpg",
  },
});

module.exports = mongoose.model("user", userSchema);
