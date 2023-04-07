const express = require("express");
const router = express.Router();

const {
    registerUser,
  } = require("../functionality/userFunctionality.js");

/* User routes */

//Register a new user
router.post("/register", registerUser);

module.exports = router;