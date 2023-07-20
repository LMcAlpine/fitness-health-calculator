const unitConverter = require("./unitconverter.js");
const convertFeetToInches = unitConverter.convertFeetToInches;

//http://localhost:3000/bmi?weight=70&height=1.75

/**
 * Calculates the Body Mass Index (BMI) based on weight and height.
 * @param {number} weightInPounds - The weight in pounds
 * @param {number} heightInFeet- The height in feet.
 * @returns {number} - The calculated BMI value.
 */
const calculateBMI = function (weightInPounds, heightInFeet) {
  if (weightInPounds <= 0 || heightInFeet <= 0) {
    console.log("Weight and Height must be positive");
    return;
  }
  console.log(heightInFeet);
  const conversionFactor = 703;

  const heightInInches =
    convertFeetToInches(heightInFeet.feet) + heightInFeet.inches;

  const bmi = (
    (weightInPounds / heightInInches ** 2) *
    conversionFactor
  ).toFixed(1);

  let bmiCategory = { bmiValue: bmi, category: "" };

  if (bmi < 18.5) {
    console.log(`Your BMI is ${bmi}, you are underweight.`);

    bmiCategory = setBMIObject(bmiCategory, bmi, "underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`You BMI is ${bmi}, you have a normal weight.`);
    bmiCategory = setBMIObject(bmiCategory, bmi, "normal weight");
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log(`Your BMI is ${bmi}, you are slightly overweight.`);
    bmiCategory = setBMIObject(bmiCategory, bmi, "slightly overweight");
  } else {
    console.log(`Your BMI is ${bmi}, you are obese.`);
    bmiCategory = setBMIObject(bmiCategory, bmi, "obese");
  }

  return bmiCategory;
};

function setBMIObject(bmiCategoryObject, bmiNumber, bmiString) {
  bmiCategoryObject.bmiValue = bmiNumber;
  bmiCategoryObject.category = bmiString;
  return bmiCategoryObject;
}

module.exports = { calculateBMI };
