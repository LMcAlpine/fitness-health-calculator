const genderSelect = document.querySelector("#gender-input");
genderSelect.addEventListener("change", function (event) {
  updateHipInputVisibility();
});

function updateHipInputVisibility() {
  const genderSelect = document.querySelector("#gender-input");
  const hipInputContainer = document.querySelector("#hip-input-container");

  // Show the "Hip" input container only when female is selected
  if (genderSelect.value === "female") {
    hipInputContainer.style.display = "block";
  } else {
    hipInputContainer.style.display = "none";
  }
}

updateHipInputVisibility();
