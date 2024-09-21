const mongoose = require("mongoose");
const util = require("./util");

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("database connected successfully".bold.bgBrightBlue);
    });
    mongoose.connection.on("error", (err) => {
      console.log(`failed to connect to db ${err}`.bold.bgBrightRed);
    });
    await mongoose.connect(util.connectionString);
  } catch (error) {
    console.log(`failed to connect to db ${err}`.bold.bgBrightRed);
    process.exit(1);
  }
};

module.exports = connectDb;
