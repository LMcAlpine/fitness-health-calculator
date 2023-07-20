const caloriesburnedForm = document.querySelector("#caloriesburned-form");
/**
 * Adds an event listener to the calories burned form for the "submit" event.
 * When the form is submitted, it calculates and displays the calories burned result.
 */
caloriesburnedForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const activityInput = document.querySelector("#activity-input");
  const durationInput = document.querySelector(
    "#duration-input-caloriesburned"
  );
  const weightInput = document.querySelector("#weight-input-caloriesburned");

  catchCaloriesBurned(
    activityInput.value,
    durationInput.value,
    weightInput.value
  );
});

/**
 * Asynchronously fetches the calories burned data and displays the result.
 * @param {string} activityInput - The activity input value.
 * @param {string} durationInput - The duration input value (in minutes).
 * @param {string} weightInput - The weight input value.
 * @returns {Promise<void>} - A promise that resolves after fetching and displaying the calories burned result.
 */
async function catchCaloriesBurned(activityInput, durationInput, weightInput) {
  const response = await fetch(
    `http://localhost:3000/caloriesburned?activity=${activityInput}&duration=${durationInput}&weight=${weightInput}`
  );

  if (!response.ok) {
    console.log("Error: Failed to fetch BMI data");
    return;
  }

  const data = await response.json();

  document.getElementById(
    "caloriesburned-result-container"
  ).innerText = `${data}`;
}
