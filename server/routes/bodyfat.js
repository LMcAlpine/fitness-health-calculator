const express = require("express");
const router = express.Router();
const bodyFatCalculator = require("../utils/bodyfatcalculator.js");

// bodyfat page route
router.get("/", function (req, res) {
  const gender = req.query.gender;

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
  console.log("height: " + height);

  const waist = req.query.waist;
  const neck = req.query.neck;
  const hip = req.query.hip;

  const bodyfat = bodyFatCalculator(gender, height, waist, neck, hip);
  res.json(`Your body fat percentage is ${bodyfat.toFixed(0)}%.`);
});

module.exports = router;
