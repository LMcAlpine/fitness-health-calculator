const bodyfatForm = document.querySelector("#bodyfat-form");
/**
 * Adds an event listener to the body fat form for the "submit" event.
 * When the form is submitted, it calculates and displays the body fat result.
 */
bodyfatForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const genderInput = document.querySelector("#gender-input");
  const heightInput = document.querySelector("#height-input-bodyfat");
  const waistInput = document.querySelector("#waist-input");
  const neckInput = document.querySelector("#neck-input");
  const hipInput = document.querySelector("#hip-input");

  catchBodyFat(
    genderInput.value,
    heightInput.value,
    waistInput.value,
    neckInput.value,
    hipInput.value
  );
});

/**
 * Asynchronously fetches the body fat data and displays the result.
 * @param {string} genderInput - The gender input value (e.g., "male" or "female").
 * @param {string} heightInput - The height input value.
 * @param {string} waistInput - The waist input value.
 * @param {string} neckInput - The neck input value.
 * @param {string} hipInput - The hip input value.
 * @returns {Promise<void>} - A promise that resolves after fetching and displaying the body fat result.
 */

async function catchBodyFat(
  genderInput,
  heightInput,
  waistInput,
  neckInput,
  hipInput
) {
  if (heightInput <= 0 || waistInput < 0 || neckInput < 0 || hipInput < 0) {
    // console.log("Weight and Height must be positive");
    showError(`Values must be positive `);
    return;
  }

  const response = await fetch(
    `http://localhost:3000/bodyfat?gender=${genderInput}&height=${heightInput}&waist=${waistInput}&neck=${neckInput}&hip=${hipInput}`
  );

  if (!response.ok) {
    console.log("Error: Failed to fetch Body Fat data");
    const data = await response.json();
    showError(data.error);
    return;
  }

  const data = await response.json();

  document.getElementById("bodyfat-result-container").innerText = `${data}`;
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
