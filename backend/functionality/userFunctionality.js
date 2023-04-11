const db = require('../db/DB-Controller');

/*
  All functionality for commands related to users
  This is where the data from the http requests are processed
*/

//Registers a new user, has to have unique username
const registerUser = async (req, res) => {
    try {
      const { username, password, email, fname, lname, age, gender, phone } = req.body;
      db.registerCustomerAccount(username, password, email, fname,
        lname, age, gender, phone);
      res.status(201).json({ validReg: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
  };

//Registers a new admin, has to have unique username
const registerAdmin = async (req, res) => {
  try {
    const { username, password, email, fname, lname, age, gender, phone, position } = req.body;
    db.registerAdminAccount(username, password, email, fname,
      lname, age, gender, phone, position);
    res.status(201).json({ validReg: true });
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
  }
};

  //Logins an exisitng user, according to request body.
const loginUser = async (req, res) => {
  try{
    const { username, password, email } = req.body;
    const valid = await db.logIn(username, password, email);
    if(!valid)
    {
      return res.status(401).json({ message: "The username or password is incorrect" });
    }
    res.status(200).json({ message: "Login successful" });
  }
  catch(error){
    res.status(500).json({ message: error.message });
  }
};

//Gets all brand names in the db
const getBrands = async (req, res) => {
  try{
    const brands = await db.getBrands();
    console.log(brands);
    if(!brands)
    {
      return res.status(404).json({ message: "No brands in the database" });
    }
    res.status(200).json(brands);
  }
  catch(error){
    res.status(500).json({ message: error.message });
  }
};

//Gets all departments in the db
const getDepartments = async (req, res) => {
  try{
    const departments = await db.getDepartments();
    console.log(departments);
    if(!departments)
    {
      return res.status(404).json({ message: "No departents in the database" });
    }
    res.status(200).json(departments);
  }
  catch(error){
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    registerUser,
    registerAdmin,
    loginUser,
    getBrands,
    getDepartments
  };