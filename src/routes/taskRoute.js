const router = require("express").Router();

const { getTask, createTask } = require("../handler/taskHandler");
const Task = require("../models/task"); // Import the Task model

// Route to get all tasks for a specific user (using user's email)
router.get("/:email", getTask);

// Route to create a new task
router.post("/tasks/create", createTask);

module.exports = router;

