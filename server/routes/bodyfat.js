const express = require("express");
const router = express.Router();
const bodyFatCalculator = require("../utils/bodyfatcalculator.js");

// bodyfat page route
router.get("/", function (req, res) {
  res.send("bodyfat page");
});

module.exports = router;
