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
