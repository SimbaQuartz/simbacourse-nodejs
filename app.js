//Middleware

//req => middleware => res

const express = require("express");
const morgan = require("morgan");

const app = express();

const middleWare = require("./myMiddleware");
const authenticationApp = require("./auth");

app.use([middleWare, authenticationApp]);

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/orders", (req, res) => {
  res.send("Orders");
});

app.listen(5000, () => {
  console.log("Ap is listening on port 5000");
});
