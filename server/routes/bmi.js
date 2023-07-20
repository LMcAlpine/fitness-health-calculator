const express = require("express");
const router = express.Router();
const bmiCalculator = require("../utils/bmiCalculator.js");
console.log(bmiCalculator);

// bmi page route
router.get("/", function (req, res) {
  const weight = parseFloat(req.query.weight);
  let height = req.query.height;
  const heightPattern = /^(\d+)'\s*(\d+)"$/;
  const match = height.match(heightPattern);
  if (!match) {
    return res
      .status(400)
      .json({ error: 'Invalid height format. Use format like "5\'10"' });
  }
  const feet = parseInt(match[1]);
  const inches = parseInt(match[2]);

  height = { feet, inches };

  const bmi = bmiCalculator.calculateBMI(weight, height);

  res.json(`You're BMI value is ${bmi.bmiValue}, you are ${bmi.category}`);
});

module.exports = router;
