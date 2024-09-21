const express = require("express");
require("express-async-errors");
const userRoutes = require("./routes/userRoutes");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
require("colors");

const app = express();

//middlewares
app.use(express.json());

//routes
app.use("/api/v1/user", userRoutes);

//unknownRoute handler
app.use(notFound);
//GlobalErrorHandler
app.use(errorHandler);
module.exports = app;
