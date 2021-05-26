const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const router = require("./api");

const app = express();

app.use(bodyParser.json());

app.use("/", router);

mongoose
  .connect(
    "mongodb+srv://jainam:jainam123@cluster0.renza.mongodb.net/demoDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(app.listen(3000))
  .catch(new Error("DB connection error."));
