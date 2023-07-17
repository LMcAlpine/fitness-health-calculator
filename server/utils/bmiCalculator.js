/**
 * Convert Feet to Inches
 * @param {number} feet
 * @returns {number}
 */
function convertFeetToInches(feet) {
  const inchesPerFoot = 12;
  return feet * inchesPerFoot;
}

/**
 * Calculates the Body Mass Index (BMI) based on weight and height.
 * @param {number} weightInPounds - The weight in pounds
 * @param {number} heightInFeet- The height in feet.
 * @returns {number} - The calculated BMI value.
 */
const calculateBMI = function (weightInPounds, heightInFeet) {
  const conversionFactor = 703;

  const heightInInches = convertFeetToInches(heightInFeet);

  const bmi = (
    (weightInPounds / heightInInches ** 2) *
    conversionFactor
  ).toFixed(1);
  if (bmi < 18.5) {
    console.log(`Your BMI is ${bmi}, you are underweight.`);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`You BMI is ${bmi}, you have a normal weight.`);
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log(`Your BMI is ${bmi}, you are slightly overweight.`);
  } else {
    console.log(`Your BMI is ${bmi}, you are  obese.`);
  }
  return parseFloat(bmi);
};

module.exports = calculateBMI;