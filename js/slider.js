$(document).ready(function(){

  const burgerSlider = $(".owl-carousel");
  burgerSlider.owlCarousel({

    items: 1,
    loop: true,
    smartSpeed: 1000,

  });


  $('#burger__slider--right').click(function() {
    burgerSlider.trigger('next.owl.carousel');
  })

  $('#burger__slider--left').click(function() {

      burgerSlider.trigger('prev.owl.carousel');
  })
  
});