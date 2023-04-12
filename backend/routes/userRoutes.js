const express = require("express");
const router = express.Router();

const {
    registerUser,
    registerAdmin,
    loginUser,
    getBrands,
    getDepartments,
    getDepartmentProducts,
  } = require("../functionality/userFunctionality.js");

/* User routes */

//Register a new user
router.post("/register", registerUser);

//Register a new admin
router.post("/registerAdmin", registerAdmin);

//Register a new user
router.post("/login", loginUser);

//Gets all brands from the database
router.get("/getBrands", getBrands);

//Gets all departments from the database
router.get("/getDepartments", getDepartments);

//Gets all products from a certain department
router.get("/:dname/getProducts", getDepartmentProducts);


module.exports = router;