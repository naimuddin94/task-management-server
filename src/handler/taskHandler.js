const User = require("../models/userSchema");
const Task = require("../models/taskSchema");

const getTask = async (req, res) => {
  const userEmail = req.params.email;

  try {
    // Find the user by their email
    const user = await User.findOne({ email: userEmail });

    if (user) {
      // Find tasks associated with the user using their ObjectId
      const tasks = await Task.find({ createdBy: user._id });

      res.json(tasks); // Send tasks as JSON response
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const createTask = async (req, res) => {
  const { title, description, deadline, priority, userEmail } = req.body;

  try {
    // Find the user by their email
    const user = await User.findOne({ email: userEmail });

    if (user) {
      console.log(user);
      // Create a new task and associate it with the user
      const newTask = new Task({
        title,
        description,
        deadline,
        priority,
        createdBy: user._id,
      });
      console.log("console from 41 line", newTask);
      // Save the task to the database
      const savedTask = await newTask.save();
      console.log(savedTask);
      res.status(201).json({ message: "Task saved successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteTask = async (req, res) => {
  const taskId = req.params.taskId;

  try {
    // Find the task by its ID and delete it
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (deletedTask) {
      res.json({ message: "Task deleted successfully" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getTask, createTask, deleteTask };
