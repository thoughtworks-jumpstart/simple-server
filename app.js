const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

app.get("/greet", (req, res) => {
  let greeting = "Greet someone by name with /greet?name='Jane Doe'";
  if (req.query.name != undefined) {
    greeting = `Hello, ${req.query.name}!`;
  }
  res.send(greeting);
});

module.exports = app;
