// Реализация работы формы заказа

const form = document.querySelector('.delivery-form');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.btn__popup')
const url = "https://webdev-api.loftschool.com/sendmail";
const popupText = document.querySelector('.popup__text');

popupClose.addEventListener('click',toggleModal);

function toggleModal(){
  popup.classList.toggle('popup__active');
  document.body.classList.toggle('hiden');
}

form.onsubmit = function (e){
  e.preventDefault();
  const formData = new FormData(form);
  formData.append("to", "alexdp777@gmail.com");
  const request = new XMLHttpRequest();
  request.open("POST", url);
  request.send(formData);

  request.addEventListener("load", function(){
    const response = JSON.parse(request.response);
    popupText.innerHTML = response.message;
    toggleModal();
  })
}