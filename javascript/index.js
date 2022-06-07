// Navmenu Toggler
let navMenuIconOpen = document.getElementById("hamburger__container");
let navMenuShow = document.querySelector(".nav__menu__container");
let hamburgerLinesFirstChild = document.querySelector(
  ".hamburger__lines:first-child"
);

let hamburgerLinesThirdChild = document.querySelector(
  ".hamburger__lines:last-child"
);

// Listen to a click event on element nav__menu__container which is a class then toggles navmenu element.
navMenuIconOpen.addEventListener("click", () => {
  navMenuShow.classList.toggle("show__nav__menu"); // Toggles navmenu
  hamburgerLinesFirstChild.classList.toggle("hamburger__lines__first__child"); // Toggles - Changes hamburger lines
  hamburgerLinesThirdChild.classList.toggle("hamburger__lines__third__child");
});
