const calculateIdealWeight = function (gender, height) {
  const baseWeightMaleKG = 50;
  const baseWeightFemaleKG = 45.5;
  const kgPerInch = 2.3;

  let idealWeight = gender === "male" ? baseWeightMaleKG : baseWeightFemaleKG;

  for (let inch = 0; inch < height.inches; inch++) {
    idealWeight += kgPerInch;
  }
  return idealWeight;
};

// console.log(calculateIdealWeight("male", { feet: 5, inches: 10 }));
module.exports = calculateIdealWeight;
