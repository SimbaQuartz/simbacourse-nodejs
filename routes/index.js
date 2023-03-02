const express = require("express");

const products = require("./products");
const orders = require("./orders");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home Route");
});

router.use("/products", products);

router.use("/orders", orders);

router.get("/carts", (req, res) => {
  res.send("Carts");
});

router.get("/users", (req, res) => {
  res.send("Users");
});

router.get("/invoices", (req, res) => {
  res.send("Invoices");
});

module.exports = router;
