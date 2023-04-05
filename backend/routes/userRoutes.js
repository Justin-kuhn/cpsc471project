const express = require("express");
const router = express.Router();

/* User routes */

//Register a new user
router.post("/register", validateRegister, registerUser);

module.exports = router;