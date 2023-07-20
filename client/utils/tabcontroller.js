function showCalculator(calculatorId, tabLinkId) {
  const calculatorContent = document.querySelector(calculatorId);
  calculatorContent.classList.add("show", "active");

  // Hide other calculator contents
  const otherCalculators = document.querySelectorAll(".tab-pane");
  otherCalculators.forEach((calculator) => {
    if (calculator !== calculatorContent) {
      calculator.classList.remove("show", "active");
    }
  });

  // Update active tab classes
  const tabLinks = document.querySelectorAll(".nav-link");
  tabLinks.forEach((link) => {
    link.classList.toggle("active", link.id === tabLinkId);
  });
}

// Event listeners for tab links
const bmiTabLink = document.querySelector("#bmi-tab");
bmiTabLink.addEventListener("click", function (event) {
  event.preventDefault();
  showCalculator("#bmi", "bmi-tab");
});

const bodyFatTabLink = document.querySelector("#bodyfat-tab");
bodyFatTabLink.addEventListener("click", function (event) {
  event.preventDefault();
  showCalculator("#bodyfat", "bodyfat-tab");
});

const caloriesBurnedTabLink = document.querySelector("#caloriesburned-tab");
caloriesBurnedTabLink.addEventListener("click", function (event) {
  event.preventDefault();
  showCalculator("#caloriesburned", "caloriesburned-tab");
});

const idealWeightTabLink = document.querySelector("#idealweight-tab");
idealWeightTabLink.addEventListener("click", function (event) {
  event.preventDefault();
  showCalculator("#idealweight", "idealweight-tab");
});

// Initially show the BMI Calculator content and set the active tab
showCalculator("#bmi", "bmi-tab");
