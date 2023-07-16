function calculateBMI(height, weight) {
  height *= 12;
  const conversionFactor = 703;
  const bmi = parseFloat(((weight / height ** 2) * conversionFactor).toFixed(1));
  if (bmi < 18.5) {
    console.log(`Your BMI is ${bmi}, you are underweight.`);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`You BMI is ${bmi}, you have a normal weight.`);
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log(`Your BMI is ${bmi}, you are slightly overweight.`);
  } else {
    console.log(`Your BMI is ${bmi}, you are  obese.`);
  }
  return bmi;
}

// Example usage:
const height = 5; // height in feet
const weight = 100; // weight in pounds
const result = calculateBMI(height, weight);
console.log(result);
