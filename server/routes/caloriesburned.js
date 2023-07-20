const express = require("express");
const router = express.Router();
const caloriesBurnedCalculator = require("../utils/caloriesburnedcalculator.js");

// caloriesburned page route
router.get("/", function (req, res) {
  const activity = req.query.activity;
  const duration = req.query.duration;
  const weight = req.query.weight;

  const caloriesBurned = caloriesBurnedCalculator(activity, duration, weight);
  res.json(caloriesBurned);
});

module.exports = router;
