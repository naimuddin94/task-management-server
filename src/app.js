const express = require("express");
const cors = require("cors");
require("dotenv").config();
const globalErrorHandler = require("./lib/globalErrorHandler");
const app = express();


app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("server is running........");
});

// handling all route not found errors
app.get("*", (req, res, next) => {
  const error = new Error(`Can't find route ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

module.exports = app;