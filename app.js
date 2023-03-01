//Middleware

//req => middleware => res

const express = require("express");

const app = express();

const middleWare = require("./myMiddleware");
const authenticationApp = require("./auth");

const myRoute = require("./routes");
const loginRoute = require("./routes/login");

// app.use("/api", middleWare);

app.use("/api", [myRoute, middleWare]);
app.use("/login", loginRoute);

// app.get("/", (req, res) => {
//   res.send("Home");
// });

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
  console.log("App is listening on port 5000");
});
