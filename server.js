const express = require('express');
const app = express(); //create an 'app' variable set to the value of 'express()'
const PORT = process.env.PORT || 3001;
// const routes = require('./routes')

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); //serving statis files in the public folder
// app.use(routes);

// require html/api routes
const htmlRouter = require("./routes/html");
const apiRouter = require("./routes/api");

// link routes to path
app.use(htmlRouter);
app.use("/api", apiRouter);

//have the app listen on port 3001 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);