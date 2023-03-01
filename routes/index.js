const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home Route v1");
});

module.exports = router;
