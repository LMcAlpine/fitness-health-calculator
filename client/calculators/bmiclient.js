/**
 * Represents the BMI form.
 * @type {HTMLFormElement}
 */
const bmiForm = document.querySelector("#bmi-form");
/**
 * Adds an event listener to the BMI form for the "submit" event.
 * When the form is submitted, it calculates and displays the BMI result.
 */
bmiForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const weightInput = document.querySelector("#weight-input");
  const heightInput = document.querySelector("#height-input");

  catchBMI(weightInput.value, heightInput.value);
});

/**
 * Asynchronously fetches the BMI data and displays the result.
 * @param {string} weightInput - The weight input value.
 * @param {string} heightInput - The height input value.
 */
async function catchBMI(weightInput, heightInput) {
  const response = await fetch(
    `http://localhost:3000/bmi?weight=${weightInput}&height=${heightInput}`
  );

  if (!response.ok) {
    console.log("Error: Failed to fetch BMI data");
    const data = await response.json();
    showError(data.error);
    return;
  }

  const data = await response.json();

  document.getElementById("bmi-result-container").innerText = `${data}`;
}
function showError(errorMessage) {
  const errorContainer = document.getElementById("error-container");
  errorContainer.innerText = errorMessage;
  errorContainer.style.color = "red";
  errorContainer.style.fontWeight = "bold";
  errorContainer.style.marginTop = "10px";
  errorContainer.style.marginBottom = "10px";
  errorContainer.style.display = "block";
}
