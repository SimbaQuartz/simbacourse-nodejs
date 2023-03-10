// import chalk from "chalk";

const express = require("express");

const mongoose = require("mongoose");
const app = express();

const myRoute = require("./routes");
// mongodb+srv://node:<password>@nodejs-class.ozoaygd.mongodb.net/test

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://node:WBZXTk8tQBth0wgg@nodejs-class.ozoaygd.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object

//   console.log("Hey there!, I am connected to MongoDB");
//   console.log(collection);
//   client.close();
// });

// mongoose.set("useCreateIndex", true);
mongoose
  .connect(
    "mongodb+srv://node:WBZXTk8tQBth0wgg@nodejs-class.ozoaygd.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "test",
    }
  )
  .then(() => console.log(`MongoDB Connected!`));

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/api", myRoute);

app.listen(5000, () => {
  console.log("App is listening on port 5000");
});
