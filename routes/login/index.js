const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Logged in");
  res.send("Hey Artti");
});

module.exports = router;
