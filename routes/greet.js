const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let greeting = "Greet someone by name";
  if (req.query.name != undefined) {
    greeting = `Hello, ${req.query.name}!`;
  }
  res.send(greeting);
});

module.exports = router;
