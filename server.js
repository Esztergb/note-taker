const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); //serving statis files in the public folder

// require html/api routes
const htmlRouter = require("./routes/html");
const apiRouter = require("./routes/api");

// link routes to path
app.use(htmlRouter);
app.use("/api", apiRouter);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);