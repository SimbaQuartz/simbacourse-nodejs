const express = require("express");

const router = express.Router();

const categories = [
  "Electronics",
  "Clothing",
  "Beauty & Wellness",
  "Sports",
  "Toys",
  "Eatables",
  "Footwear",
];

router.get("/", (req, res) => {
  res.send(categories);
});

router.get("/dummy", (req, res) => {
  res.send("Hey dummy!");
});

module.exports = router;
