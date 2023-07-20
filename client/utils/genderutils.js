const genderSelect = document.querySelector("#gender-input");
/**
 * Adds an event listener to the gender select dropdown for the "change" event.
 * When the gender is changed, it updates the visibility of the hip input container accordingly.
 */
genderSelect.addEventListener("change", function (event) {
  updateHipInputVisibility();
});
/**
 * Updates the visibility of the hip input container based on the selected gender.
 */
function updateHipInputVisibility() {
  const genderSelect = document.querySelector("#gender-input");
  const hipInputContainer = document.querySelector("#hip-input-container");

  if (genderSelect.value === "female") {
    hipInputContainer.style.display = "block";
  } else {
    hipInputContainer.style.display = "none";
  }
}

updateHipInputVisibility();
