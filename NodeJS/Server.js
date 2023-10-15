const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

app.listen("5000", () => {
  console.log("server is running on port 5000 ");
});

mongoose.connect(
    "mongodb+srv://N-balahariraj:1sdHLRnpjHN0iopD@cluster0.e5ifr04.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("connection was not successful");
});

db.on("open", () => {
  console.log("connection is successful");
});

require("./Routes/Route")(app);