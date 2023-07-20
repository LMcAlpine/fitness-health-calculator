/**
 * Shows the calculator with the specified ID and sets the corresponding tab link as active.
 * @param {string} calculatorId - The ID of the calculator content to show.
 * @param {string} tabLinkId - The ID of the corresponding tab link to set as active.
 */
function showCalculator(calculatorId, tabLinkId) {
  const calculatorContent = document.querySelector(calculatorId);
  calculatorContent.classList.add("show", "active");

  const otherCalculators = document.querySelectorAll(".tab-pane");
  otherCalculators.forEach((calculator) => {
    if (calculator !== calculatorContent) {
      calculator.classList.remove("show", "active");
    }
  });

  const tabLinks = document.querySelectorAll(".nav-link");
  tabLinks.forEach((link) => {
    link.classList.toggle("active", link.id === tabLinkId);
  });
}

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

showCalculator("#bmi", "bmi-tab");
