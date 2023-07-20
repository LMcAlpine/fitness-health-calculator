function showBMICalculator() {
  const bmiContent = document.querySelector("#bmi");
  const bodyFatContent = document.querySelector("#bodyfat");
  bmiContent.classList.add("show", "active");
  bodyFatContent.classList.remove("show", "active");

  const caloriesBurnedContent = document.querySelector("#caloriesburned");
  caloriesBurnedContent.classList.remove("show", "active");

  // Update active tab classes
  const bmiTabLink = document.querySelector("#bmi-tab");
  const bodyFatTabLink = document.querySelector("#bodyfat-tab");
  bmiTabLink.classList.add("active");
  bodyFatTabLink.classList.remove("active");

  const caloriesBurnedTabLink = document.querySelector("#caloriesburned-tab");
  caloriesBurnedTabLink.classList.remove("active");
}

function showBodyFatCalculator() {
  const bodyFatContent = document.querySelector("#bodyfat");
  const bmiContent = document.querySelector("#bmi");
  bodyFatContent.classList.add("show", "active");
  bmiContent.classList.remove("show", "active");

  const caloriesBurnedContent = document.querySelector("#caloriesburned");
  caloriesBurnedContent.classList.remove("show", "active");
  // Update active tab classes
  const bodyFatTabLink = document.querySelector("#bodyfat-tab");
  const bmiTabLink = document.querySelector("#bmi-tab");
  bodyFatTabLink.classList.add("active");
  bmiTabLink.classList.remove("active");
  const caloriesBurnedTabLink = document.querySelector("#caloriesburned-tab");
  caloriesBurnedTabLink.classList.remove("active");
}

function showCaloriesBurnedCalculator() {
  //const caloriesBurnedContent = document.querySelector("#caloriesburned-tab");
  // const bodyfatTabLink = document.querySelector("#bodyfat-tab");
  const caloriesBurnedContent = document.querySelector("#caloriesburned");
  caloriesBurnedContent.classList.add("show", "active");

  const bmiContent = document.querySelector("#bmi");
  bmiContent.classList.remove("show", "active");

  const bodyFatContent = document.querySelector("#bodyfat");
  bodyFatContent.classList.remove("show", "active");

  const caloriesBurnedTabLink = document.querySelector("#caloriesburned-tab");
  const bodyFatTabLink = document.querySelector("#bodyfat-tab");
  const bmiTabLink = document.querySelector("#bmi-tab");
  caloriesBurnedTabLink.classList.add("active");
  bodyFatTabLink.classList.remove("active");
  bmiTabLink.classList.remove("active");
}

const bmiTabLink = document.querySelector("#bmi-tab");
bmiTabLink.addEventListener("click", function (event) {
  event.preventDefault();
  showBMICalculator();
});

const bodyFatTabLink = document.querySelector("#bodyfat-tab");
bodyFatTabLink.addEventListener("click", function (event) {
  event.preventDefault();
  showBodyFatCalculator();
});

const caloriesBurnedTabLink = document.querySelector("#caloriesburned-tab");
caloriesBurnedTabLink.addEventListener("click", function (event) {
  event.preventDefault();
  showCaloriesBurnedCalculator();
});

showBMICalculator();
