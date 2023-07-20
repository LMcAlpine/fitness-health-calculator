const express = require("express");
const router = express.Router();
const caloriesBurnedCalculator = require("../utils/caloriesburnedcalculator.js");

// caloriesburned page route
router.get("/", function (req, res) {
  // res.send("caloriesburned page");
  console.log(req.query.activity);
  console.log(req.query.duration);
  console.log(req.query.weight);
  console.log("am i here");

  const activity = req.query.activity;
  const duration = req.query.duration;
  const weight = req.query.weight;

  const caloriesBurned = caloriesBurnedCalculator(activity, duration, weight);
  res.json(caloriesBurned);
});

module.exports = router;
