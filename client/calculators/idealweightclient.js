const idealWeightForm = document.querySelector("#idealweight-form");
idealWeightForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const genderInput = document.querySelector("#gender-input-idealweight");
  const heightInput = document.querySelector("#height-input-idealweight");

  console.log(genderInput.value);
  console.log(heightInput.value);

  calculateIdealWeight(genderInput.value, heightInput.value);
});

async function calculateIdealWeight(genderInput, heightInput) {
  const response = await fetch(
    `http://localhost:3000/idealweight?gender=${genderInput}&height=${heightInput}`
  );

  if (!response.ok) {
    // Handle the error here, e.g., show an error message to the user
    console.log("Error: Failed to fetch ideal weight data");
    return;
  }

  const data = await response.json();
  document.getElementById("idealweight-result-container").innerText = `${data}`;
}
