function toggleNav() {
  /* MENU SHOW Y HIDDEN */
  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

  /* MENU SHOW */
  /* Validate if constant exists */
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show_menu");
    });
  }

  /* MENU HIDDEN */
  /* Validate if constant exists */
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show_menu");
    });
  }

  /* REMOVE MENU MOBILE */
  const navLink = document.querySelectorAll(".nav_link");

  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove("show_menu");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
}

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* SHOW SCROLL UP */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Function to set dark mode
function setDarkMode(isDarkMode) {
  const body = document.body;
  body.classList.toggle("dark-theme", isDarkMode);

  // Change icon based on dark mode state
  const iconTheme = document.getElementById("theme-button");
  iconTheme.classList = isDarkMode ? "uil uil-sun change-theme" : "uil uil-moon change-theme";
}

// Function to toggle dark mode and save preference
function toggleDarkMode() {
  const body = document.body,
    isDarkMode = body.classList.contains("dark-theme");

  // Toggle dark mode
  setDarkMode(!isDarkMode);

  // Save preference to localStorage
  localStorage.setItem("darkMode", !isDarkMode);
}

// Check for dark mode preference in localStorage
const storedDarkMode = localStorage.getItem("darkMode");

// If dark mode preference exists, set it
if (storedDarkMode !== null) {
  setDarkMode(storedDarkMode === "true");
}

// Set initial dark mode state based on localStorage
setDarkMode(storedDarkMode === "true");

// TEXT FOCUS
// Pulsa
function textFocus() {
  document.getElementById("noHp").focus();
}

// Game: Text Focus amd Show .game_id_user
function focusIdGame() {
  const showDiv = document.getElementById("game-id-user");
  showDiv.style.display = "block";
  document.getElementById("id-game").focus();
}

// VALIDATION AND ENABLE BUTTON
// No Handphone
function enableButton() {
  var input = document.getElementById("noHp").value;
  checkBox = document.getElementById("check");
  button = document.getElementById("submit-button");
  alertValidation = document.getElementById("alert-validation");

  if (checkBox.checked == true) {
    if (!/^\d{11,13}$/.test(input)) {
      checkBox.checked = false;
      alertValidation.textContent = "Masukkan nomor telepon yang valid (10-13 digit)";
    } else {
      button.disabled = false;
      alertValidation.textContent = "";
    }
  } else {
    button.disabled = true;
  }
}

// Game
function gameButton() {
  var input = document.getElementById("id-game").value;
  checkBox = document.getElementById("check-game");
  button = document.getElementById("submit-game");
  alertValidation = document.getElementById("alert-validation");

  if (checkBox.checked == true) {
    if (input === "") {
      checkBox.checked = false;
      alertValidation.textContent = "Masukkan User ID yang valid";
    } else {
      button.disabled = false;
      alertValidation.textContent = "";
    }
  } else {
    button.disabled = true;
  }
}
