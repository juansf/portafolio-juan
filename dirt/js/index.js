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

$(document).ready(function(){
  $('.fancybox').fancybox({
    keyboard:true
  })
})



// efectos para menu galleria//
$(document).ready(function(){
  $('.categoria-item').on('click',function(){
  //  filtro de imagenes
    let filtro = $(this).attr('data-category');
    if(filtro == 'all'){
      $('.product-item').show(500)
    
    }else{
      // ocultando producto********
      function ocultar(){
        $('.product-item').not("."+filtro).fadeOut(1000);
      
      } 

      // motrar imagenes************
      $('.product-item').filter("."+filtro).fadeIn(1000);
    }
     
  })

  $('.categoria-item').on('click',function(){
    $(this).addClass('active-gallery').siblings().removeClass('active-gallery')
  })
})