const express = require("express");
const router = express.Router();
const bmiCalculator = require("../utils/bmiCalculator.js");
console.log(bmiCalculator);

// bmi page route
router.get("/", function (req, res) {
  console.log("hello");
  const weight = parseFloat(req.query.weight);
  const height = parseFloat(req.query.height);
  const bmi = bmiCalculator.calculateBMI(weight, height);
  console.log(res.json(bmi));
  console.log(weight);
  console.log(height);
//  res.send("bmi page");
});

module.exports = router;
