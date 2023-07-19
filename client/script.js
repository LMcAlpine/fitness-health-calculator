const bmiForm = document.querySelector("#bmi-form");
bmiForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const weightInput = document.querySelector("#weight-input");
  const heightInput = document.querySelector("#height-input");
  console.log(weightInput.value);
  console.log(heightInput.value);
  catchBMI(weightInput.value, heightInput.value);
});

async function catchBMI(weightInput, heightInput) {
  const response = await fetch(
    `http://localhost:3000/bmi?weight=${weightInput}&height=${heightInput}`
  );
  console.log(response);
}
