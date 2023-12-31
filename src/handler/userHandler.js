const User = require("../models/userSchema");

const createUser = async (req, res) => {
  const { name, email, photo } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({ name, email, photo });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createUser };
