const { createUser } = require("../handler/userHandler");

const router = require("express").Router();

// Route to create a new user
router.post("/create", createUser);

module.exports = router;
