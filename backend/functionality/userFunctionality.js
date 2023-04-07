/*
  All functionality for commands related to users
*/

//Registers a new user, has to have unique username
const registerUser = async (req, res) => {
    try {
      const { username, password } = req.body;

      /* Replace with checking if user is in mysql database
      const userInDb = await db.User.findOne({ username: username });
      if (userInDb) {
        return res.status(409).json({ message: "Username already exists" });
      } 
  
      bcrypt.hash(password, 8, async function (err, hash) {
        const newUser = await db.User.create({
          admin: false,
          username,
          password: hash,
          profilePicture: process.env.DEFAULT_IMAGE_URL,
          dateOfBirth: dateOfBirth,
          dateCreated: new Date(),
        });
        newUser.save();
        if (err) {
          return res.status(500).json({ message: err.message });
        } 
        res.status(201).json({ validReg: true });
      }); */

      res.status(201).json({ validReg: true });
      
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

module.exports = {
    registerUser
  };