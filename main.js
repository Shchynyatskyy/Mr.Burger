// Hamburger Menu

const hamburgerMenu = document.querySelector(".hamburger__menu");
const nav = document.querySelector(".nav")

hamburgerMenu.addEventListener("click", function() {
  nav.classList.toggle("nav__active");
  hamburgerMenu.classList.toggle("hamburger__menu--active");
})

// Menu accordeon

const menuItems = document.querySelectorAll(".menu__item");

menuItems.forEach(el => {
  
  el.addEventListener("click", function() {
    event.preventDefault(el);

    [...menuItems]
      .filter(item => item !== el)
      .forEach(curItem => curItem.classList.remove("menu__item--active"));
    el.classList.toggle("menu__item--active");
  });
});

// Team accordeon

const teamItems = document.querySelectorAll(".team__item");

teamItems.forEach(el => {
  el.addEventListener("click", function() {
    [...teamItems]
      .filter(item => item !== el)
      .forEach(curItem => curItem.classList.remove("active"));
    el.classList.toggle("active");
  });
});

// jquery

