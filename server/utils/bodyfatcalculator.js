const unitConverter = require("./unitconverter.js");
const convertInchesToCentimeters = unitConverter.convertInchesToCentimeters;
const convertFeetToInches = unitConverter.convertFeetToInches;

const calculateBodyFat = function (gender, height, waist, neck, hip = 0) {
  const coefficientA = 495;
  const coefficientB = 450;

  const maleCoefficientA = 1.0324;
  const maleCoefficientB = 0.19077;
  const maleCoefficientC = 0.15456;

  const femaleCoefficientA = 1.29579;
  const femaleCoefficientB = 0.35004;
  const femaleCoefficientC = 0.221;

  let bodyFatPercentage;

  const heightInInches = convertFeetToInches(height);
  const heightCentimeters = convertInchesToCentimeters(heightInInches);
  const waistCentimeters = convertInchesToCentimeters(waist);

  const neckCentimeters = convertInchesToCentimeters(neck);
  const hipCentimeters = convertInchesToCentimeters(hip);

  if (gender === "male") {
    bodyFatPercentage =
      coefficientA /
        (maleCoefficientA -
          maleCoefficientB * Math.log10(waistCentimeters - neckCentimeters) +
          maleCoefficientC * Math.log10(heightCentimeters)) -
      coefficientB;
  } else if (gender === "female") {
    bodyFatPercentage =
      coefficientA /
        (femaleCoefficientA -
          femaleCoefficientB *
            Math.log10(waistCentimeters + hipCentimeters - neckCentimeters) +
          femaleCoefficientC * Math.log10(heightCentimeters)) -
      coefficientB;
  } else {
    throw new Error("Supported Genders are male and female");
  }
  return bodyFatPercentage;
};

console.log(calculateBodyFat("maele", 5, 35, 23, 34));

module.exports = calculateBodyFat;
