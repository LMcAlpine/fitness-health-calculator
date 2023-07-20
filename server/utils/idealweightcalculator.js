/**
 * Calculates the ideal weight based on the gender and height.
 * @param {string} gender - The gender ("male" or "female") to calculate the ideal weight for.
 * @param {object} height - The height object with "feet" and "inches" properties.
 * @returns {number} - The calculated ideal weight in pounds.
 */
const calculateIdealWeight = function (gender, height) {
  const baseWeightMaleKG = 50;
  const baseWeightFemaleKG = 45.5;
  const kgPerInch = 2.3;

  let idealWeight =
    gender === "male"
      ? kgPerInch * height.inches + baseWeightMaleKG
      : gender === "female"
      ? kgPerInch * height.inches + baseWeightFemaleKG
      : (console.log("Invalid gender chosen"), null);

  return idealWeight * 2.20462;
};

module.exports = calculateIdealWeight;
