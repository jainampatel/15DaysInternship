const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { message } = require("statuses");

const router = express.Router();

router.use("/", (req, res, next) => {
  res.json({
    message: "connected successfully",
  });
});

module.exports = router;
