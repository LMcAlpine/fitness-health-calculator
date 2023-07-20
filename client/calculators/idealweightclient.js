const idealWeightForm = document.querySelector("#idealweight-form");
/**
 * Adds an event listener to the ideal weight form for the "submit" event.
 * When the form is submitted, it calculates and displays the ideal weight result.
 */
idealWeightForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const genderInput = document.querySelector("#gender-input-idealweight");
  const heightInput = document.querySelector("#height-input-idealweight");

  calculateIdealWeight(genderInput.value, heightInput.value);
});

/**
 * Asynchronously fetches the ideal weight data and displays the result.
 * @param {string} genderInput - The gender input value (e.g., "male" or "female").
 * @param {string} heightInput - The height input value.
 * @returns {Promise<void>} - A promise that resolves after fetching and displaying the ideal weight result.
 */
async function calculateIdealWeight(genderInput, heightInput) {
  const response = await fetch(
    `http://localhost:3000/idealweight?gender=${genderInput}&height=${heightInput}`
  );

  if (!response.ok) {
    console.log("Error: Failed to fetch ideal weight data");
    return;
  }

  const data = await response.json();
  document.getElementById("idealweight-result-container").innerText = `${data}`;
}
