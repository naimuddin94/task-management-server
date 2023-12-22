const express = require("express");
const cors = require("cors");
require("dotenv").config();
const globalErrorHandler = require("./lib/globalErrorHandler");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://task-management-be969.web.app",
      "https://task-management-be969.firebaseapp.com",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);

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
