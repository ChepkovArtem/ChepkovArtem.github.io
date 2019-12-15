$(document).ready(function(){

    var slider = $('.slider').bxSlider({
});

$('#left').on('click', function(event){
    event.preventDefault();
    slider.goToPrevSlide();
});

  $('#right').on('click', function(event){
      event.preventDefault();
      slider.goToNextSlide();
});



});