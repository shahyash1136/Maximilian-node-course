const express = require("express");

const app = express();

app.use("/user", (req, res, next) => {
  res.send("<h1>In User Page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In a middleware");
  res.send("<h1>Home Page</h1>");
});

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
