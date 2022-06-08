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

// Departments page -- Vertical Tabs

const activateDepartments = (evt, cityName) => {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("department__info");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("department__nav__links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();