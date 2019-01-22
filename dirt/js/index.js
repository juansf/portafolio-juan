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

var tl = new TimelineLite()

$(document).ready(function(){
  $('.categoria-list').on('click',function(){
    
    // selecionador categoria del boton
    var botones = $(this).attr('category');
    console.log(botones);

    // ocultar elementos de la categoria
      
      tl.to($('.product-item'),.5,{
        scale: 0,
        // display: 'none'
      })

    // motrar elementos del boton galleria
    //   $('.product-item').show();

    tl.to($('.product-item[category="'+botones+'" ]'),.5,{
      scale:1,
      // display:'block'
    })
    


  });

  $('.categoria-list[category="all"]').on('click',function(){
      tl.to($('.product-item'),.5,{
          scale:1,
          // display:'block'
      })
    
  })
  

  // boton active boton
  
})

// $('.categoria-item').on('click',function(){
//   $(this).addClass('active-gallery').siblings().removeClass('active-gallery')
// })