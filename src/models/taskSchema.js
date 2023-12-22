const mongoose = require("mongoose");

// Task Schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    enum: ["Low", "Moderate", "High"],
    default: "Low",
  },
  status: {
    type: String,
    enum: ["To-Do", "Ongoing", "Completed"],
    default: "To-Do",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create Task model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
