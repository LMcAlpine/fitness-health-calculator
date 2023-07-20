const express = require("express");
const router = express.Router();
const bodyFatCalculator = require("../utils/bodyfatcalculator.js");

// bodyfat page route
router.get("/", function (req, res) {
  //res.send("bodyfat page");

  // const weight = parseFloat(req.query.weight);\

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

  console.log("waist " + waist);
  console.log("neck " + neck);
  console.log("hip " + hip);

  const bodyfat = bodyFatCalculator(gender, height, waist, neck, hip);
  res.json(bodyfat);
  //const bmi = bmiCalculator.calculateBMI(weight, height);
  // console.log("bmi: " + bmi.bmiValue);
  //res.json(`You're BMI value is ${bmi.bmiValue}, you are ${bmi.category}`);
  //console.log(weight);
  //console.log(height);
});

module.exports = router;
