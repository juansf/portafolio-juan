$(document).ready(function(){
    $('.sidenav').sidenav();
  });
  

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elemss);
// });

window.onload = function () {
    scrollSpy('#menu')
}

window.onload = function () {
    
      scrollSpy('#menu', {
    
        offset: 0, // in pixels
    
        menuActiveTarget: 'nav ul a:hover',
    
        sectionClass: '.scrollspy',
    
        activeClass: 'active',
    
      })
    
    }
    