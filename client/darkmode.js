/**
 * Toggles the dark mode by adding or removing the "dark-mode" class from the document body.
 * It also saves the current dark mode state in the local storage.
 */
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

function applySavedMode() {
  const body = document.body;
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  body.classList.toggle("dark-mode", isDarkMode);
}

const switchButton = document.getElementById("dark-mode-switch");
switchButton.addEventListener("click", toggleDarkMode);

applySavedMode();
