const bmiForm = document.querySelector("#bmi-form");
bmiForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const weightInput = document.querySelector("#weight-input");
  const heightInput = document.querySelector("#height-input");

  catchBMI(weightInput.value, heightInput.value);
});

async function catchBMI(weightInput, heightInput) {
  const response = await fetch(
    `http://localhost:3000/bmi?weight=${weightInput}&height=${heightInput}`
  );

  if (!response.ok) {
    // Handle the error here, e.g., show an error message to the user
    console.log("Error: Failed to fetch BMI data");
    return;
  }

  const data = await response.json();

  document.getElementById("bmi-result-container").innerText = `${data}`;
}
