const router = require("express").Router();

const { getTask, createTask, deleteTask } = require("../handler/taskHandler");

// Route to get all tasks for a specific user
router.get("/:email", getTask);

// Route to create a new task
router.post("/create", createTask);

// Route to delete a task by its ID
router.delete("/:taskId", deleteTask);
module.exports = router;
