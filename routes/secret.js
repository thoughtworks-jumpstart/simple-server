const express = require("express");
const router = express.Router();

const verifyToken = (req, res, next) => {
  console.log(req.headers);
  const auth = req.headers["authorization"];

  if (auth === undefined) {
    res.status(403).send("You shall not pass!");
  }

  if (auth !== undefined) {
    const token = auth.split("Bearer ")[1];
    if (token === "super-secret-token") {
      next();
    } else {
      res.status(403).send("You shall not pass!");
    }
  }
};

router.get("/", verifyToken, (req, res) => {
  res.send("Welcome to my secret garden!");
});

module.exports = router;
