// select the things we need form the DOM
var hamburger = document.querySelector("#hamburger");
var nav = document.querySelector(".navMenu");
var navLinks = document.querySelectorAll(".navMenu li");

// toggle nav on click of hamburger menu icon
hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // burger animation
    hamburger.classList.toggle("toggle");
  });

  // close nav by clicking on list items
Array.from(navLinks).forEach((li) =>
li.addEventListener("click", () => {
  if (hamburger.classList.contains("toggle")) {
    hamburger.classList.remove("toggle");
  }
  if (nav.classList.contains("nav-active")) {
    nav.classList.remove("nav-active");
  }
})
);