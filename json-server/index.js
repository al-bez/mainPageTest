const express = require("express");
const recipes = require("./recipes-mock.json");
const recent = require("./recent-mock.json");
const app = express();
const port = 3030;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
app.get(`/data`, (req, res) => {
  res.send({ recipes, recent });
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
