/**
 * Calculates the approximate number of calories burned during a physical activity.
 * @param {string} activity - The activity intensity ("light", "moderate", "vigorous").
 * @param {number} duration - The duration of the activity in minutes.
 * @param {number} weight - The weight of the person engaging in the activity (in pounds).
 * @returns {number} - The calculated number of calories burned.
 */
const calculateCaloriesBurned = function (activity, duration, weight) {
  const kgConversion = 0.453592;
  weight *= kgConversion;

  // MET = metabolic equivalent of a task
  const baseMET = 3.5; // 3.5 mL of oxygen per kilogram per minute, MET value of 1.0
  const metValues = {
    lightIntensity: 2.0,
    moderateIntensity: 5.0,
    vigorousIntensity: 11.0,
  };

  const chosenIntensity =
    activity === "light"
      ? metValues.lightIntensity
      : activity === "moderate"
      ? metValues.moderateIntensity
      : activity === "vigorous"
      ? metValues.vigorousIntensity
      : baseMET;

  // duration should be in minutes, weight should be in kilograms
  const caloriesBurned = (duration * chosenIntensity * baseMET * weight) / 200;
  console.log(caloriesBurned);
  return caloriesBurned;
};

module.exports = calculateCaloriesBurned;
