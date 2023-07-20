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

  return idealWeight;
};

module.exports = calculateIdealWeight;
