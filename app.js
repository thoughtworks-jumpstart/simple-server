const express = require("express");
const app = express();

const index = require("./routes/index");
const greet = require("./routes/greet");
const secret = require("./routes/secret");

app.use(express.static("public"));

app.use("/", index);
app.use("/greet", greet);
app.use("/secret", secret);

module.exports = app;
