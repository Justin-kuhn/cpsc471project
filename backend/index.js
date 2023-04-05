const express = require('express');
const userRoutes = require("./routes/userRoutes.js");

const app = express();

// Log the http requests that are made
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

// Express routes
app.use("/user", userRoutes);

// Setting up the server
const server = app.listen(8000, () =>{
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server listening at http://${host}:${port}`);
})

