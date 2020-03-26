const hamburgerMenu = document.querySelector(".hamburger__menu");
const nav = document.querySelector(".nav")

hamburgerMenu.addEventListener("click", function() {
  nav.classList.toggle("nav__active");
  hamburgerMenu.classList.toggle("hamburger__menu--active");
})




