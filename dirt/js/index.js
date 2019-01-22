$(document).ready(function(){
    $('.sidenav').sidenav();
  });
  

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elemss);
// });


$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});
    
// slider modificaciones
$(document).ready(function(){
  $('.slider').slider({
    indicators	: false,
    duration : 300,
    height: 500
  });
  
  $('.slider').click(function(){
    $('.slider').slider('next')
  });



});

// carousel edision slick
$(document).ready(function(){
  $('.carousel-herramientas').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
    arrows:false
  })
})


// fancy box galleria

lightbox.option({
  'resizeDuration': 800,
  'wrapAround': true,
  'alwaysShowNavOnTouchDevices': true
})

// filtro de imagenes 
$(document).ready(function(){
  var filterizd = $('.filtr-container').filterizr({});

})

// boton activacion menu
$('.categoria-item').on('click',function(){
  $(this).addClass('active-gallery').siblings().removeClass('active-gallery')
})



// open box
