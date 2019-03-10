const express = require("express");
const app = express();

const index = require("./routes/index");
const greet = require("./routes/greet");

app.use(express.static("public"));

app.use("/", index);
app.use("/greet", greet);

module.exports = app;
