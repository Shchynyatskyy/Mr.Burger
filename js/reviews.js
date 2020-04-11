const reviewBtns = document.querySelectorAll('.btn_review');
const reviewPopup = document.querySelector('.review-popup');
const popupBlock = document.querySelector('.review-popup__text');
const closeBtn = document.querySelector('.review-popup__close');

closeBtn.addEventListener('click', function() {
    reviewPopup.classList.toggle('active');
})

reviewBtns.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        reviewPopup.classList.toggle('active');
        const parent = el.parentNode;
        const fullText = parent.querySelector('.review__text').innerHTML;
        popupBlock.innerHTML = fullText;
    })
})