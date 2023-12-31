/**
 * Converts inches to centimeters.
 * @param {number} inches - The length in inches.
 * @returns {number} - The length in centimeters.
 */
function convertInchesToCentimeters(inches) {
  const centimetersPerInch = 2.54;
  const centimeters = inches * centimetersPerInch;
  return centimeters;
}

/**
 * Convert Feet to Inches
 * @param {number} feet
 * @returns {number}
 */
function convertFeetToInches(feet) {
  const inchesPerFoot = 12;
  return feet * inchesPerFoot;
}

module.exports = { convertInchesToCentimeters, convertFeetToInches };
