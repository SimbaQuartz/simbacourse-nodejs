const express = require("express");
const app = express();

const myRoute = require("./routes");

app.use("/api", myRoute);

app.listen(5000, () => {
  console.log("App is listening on port 5000");
});
