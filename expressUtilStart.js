const express = require("express");

const app = express();

// const app = require("express")();

const path = require("path");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./pages/home/index.html"));
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!!!");
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});

/**
 * app.get
 * app.post
 * app.put
 * app.delete
 * app.use
 * app.listen
 * app.watch
 */
