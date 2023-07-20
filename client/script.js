// const bmiForm = document.querySelector("#bmi-form");
// bmiForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const weightInput = document.querySelector("#weight-input");
//   const heightInput = document.querySelector("#height-input");
//   console.log(weightInput.value);
//   console.log(heightInput.value);
//   catchBMI(weightInput.value, heightInput.value);
// });

// async function catchBMI(weightInput, heightInput) {
//   const response = await fetch(
//     `http://localhost:3000/bmi?weight=${weightInput}&height=${heightInput}`
//   );

//   if (!response.ok) {
//     // Handle the error here, e.g., show an error message to the user
//     console.log("Error: Failed to fetch BMI data");
//     return;
//   }

//   const data = await response.json();
//   console.log(data);
//   document.getElementById("bmi-result-container").innerText = `${data}`;
//   console.log(response);
// }

// Function to show BMI Calculator content and update active tab classes
// function showBMICalculator() {
//   const bmiContent = document.querySelector("#bmi");
//   const bodyFatContent = document.querySelector("#bodyfat");
//   bmiContent.classList.add("show", "active");
//   bodyFatContent.classList.remove("show", "active");

//   // Update active tab classes
//   const bmiTabLink = document.querySelector("#bmi-tab");
//   const bodyFatTabLink = document.querySelector("#bodyfat-tab");
//   bmiTabLink.classList.add("active");
//   bodyFatTabLink.classList.remove("active");
// }

// // Function to show Body Fat Calculator content and update active tab classes
// function showBodyFatCalculator() {
//   const bodyFatContent = document.querySelector("#bodyfat");
//   const bmiContent = document.querySelector("#bmi");
//   bodyFatContent.classList.add("show", "active");
//   bmiContent.classList.remove("show", "active");

//   // Update active tab classes
//   const bodyFatTabLink = document.querySelector("#bodyfat-tab");
//   const bmiTabLink = document.querySelector("#bmi-tab");
//   bodyFatTabLink.classList.add("active");
//   bmiTabLink.classList.remove("active");
// }

// // Event listener for BMI Calculator tab link
// const bmiTabLink = document.querySelector("#bmi-tab");
// bmiTabLink.addEventListener("click", function (event) {
//   event.preventDefault();
//   showBMICalculator();
// });

// // Event listener for Body Fat Calculator tab link
// const bodyFatTabLink = document.querySelector("#bodyfat-tab");
// bodyFatTabLink.addEventListener("click", function (event) {
//   event.preventDefault();
//   showBodyFatCalculator();
// });

// // Initially show the BMI Calculator content and set the active tab
// showBMICalculator();

// const genderSelect = document.querySelector("#gender-input");
// genderSelect.addEventListener("change", function (event) {
//   updateHipInputVisibility();
// });

// function updateHipInputVisibility() {
//   const genderSelect = document.querySelector("#gender-input");
//   const hipInputContainer = document.querySelector("#hip-input-container");

//   // Show the "Hip" input container only when female is selected
//   if (genderSelect.value === "female") {
//     hipInputContainer.style.display = "block";
//   } else {
//     hipInputContainer.style.display = "none";
//   }
// }

// // Initially update the visibility of the "Hip" input field
// updateHipInputVisibility();
