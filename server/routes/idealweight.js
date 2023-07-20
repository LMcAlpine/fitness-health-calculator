const express = require("express");
const router = express.Router();
const idealWeightCalculator = require("../utils/idealweightcalculator.js");

// idealweight page route
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

  const idealWeight = idealWeightCalculator(gender, height);

  res.json(`Your ideal weight is ${idealWeight.toFixed(2)} pounds.`);
});

module.exports = router;
