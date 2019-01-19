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


