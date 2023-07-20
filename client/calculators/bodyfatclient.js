const bodyfatForm = document.querySelector("#bodyfat-form");
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

async function catchBodyFat(
  genderInput,
  heightInput,
  waistInput,
  neckInput,
  hipInput
) {
  const response = await fetch(
    `http://localhost:3000/bodyfat?gender=${genderInput}&height=${heightInput}&waist=${waistInput}&neck=${neckInput}&hip=${hipInput}`
  );

  if (!response.ok) {
    // Handle the error here, e.g., show an error message to the user
    console.log("Error: Failed to fetch Body Fat data");
    return;
  }

  const data = await response.json();

  document.getElementById("bodyfat-result-container").innerText = `${data}`;
}
