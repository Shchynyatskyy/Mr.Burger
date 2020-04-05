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
