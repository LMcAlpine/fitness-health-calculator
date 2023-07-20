function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Store the user's preference in localStorage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

function applySavedMode() {
  const body = document.body;
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  body.classList.toggle("dark-mode", isDarkMode);
}

// Attach event listener to the switch button
const switchButton = document.getElementById("dark-mode-switch");
switchButton.addEventListener("click", toggleDarkMode);

// Apply the saved mode on page load
applySavedMode();
