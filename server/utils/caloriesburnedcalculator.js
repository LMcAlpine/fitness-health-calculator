const calculateCaloriesBurned = function (activity, duration, weight) {
  // MET = metabolic equivalent of a task
  const baseMET = 3.5; // 3.5 mL of oxygen per kilogram per minute, MET value of 1.0
  const metValues = {
    lightIntensity: 2.0,
    moderateIntensity: 5.0,
    vigorousIntensity: 11.0,
  };
  const chosenIntensity = metValues[0];

  // duration should be in minutes, weight should be in kilograms
  const caloriesBurned = (duration * chosenIntensity * weight) / 200;
};
