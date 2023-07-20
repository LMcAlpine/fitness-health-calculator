const caloriesburnedForm = document.querySelector("#caloriesburned-form");
caloriesburnedForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const activityInput = document.querySelector("#activity-input");
  const durationInput = document.querySelector(
    "#duration-input-caloriesburned"
  );
  const weightInput = document.querySelector("#weight-input-caloriesburned");

  console.log("HERE");
  //   console.log(weightInput.value);
  //   console.log(heightInput.value);

  console.log(activityInput.value);

  catchCaloriesBurned(
    activityInput.value,
    durationInput.value,
    weightInput.value
  );
});

async function catchCaloriesBurned(activityInput, durationInput, weightInput) {
  const response = await fetch(
    `http://localhost:3000/caloriesburned?activity=${activityInput}&duration=${durationInput}&weight=${weightInput}`
  );

  if (!response.ok) {
    // Handle the error here, e.g., show an error message to the user
    console.log("Error: Failed to fetch BMI data");
    return;
  }

  const data = await response.json();
  // console.log(data);
  document.getElementById(
    "caloriesburned-result-container"
  ).innerText = `${data}`;
  //console.log(response);
}
