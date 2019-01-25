$(document).ready(function(){
    $('.sidenav').sidenav();
  });
  

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elemss);
// });

// cambio de color al scroloar
$(document).ready(function(){
  $(window).scroll(function(){

    if($('.fixeb-top').offset().top > 56){
        $('.fixeb-top').addClass('blue darken-4');
    }
    else{
      $('.fixeb-top').removeClass('blue darken-4');
    }
  })
});

$(document).ready(function(){
  $('.scrollspy').scrollSpy({
    throttle:200,
    scrollOffset:100
  });
});
    
// slider modificaciones
$(document).ready(function(){
  $('.slider').slider({
    indicators	: false,
    duration : 300,
    height: '640'
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

// lightbox conf
lightbox.option({
  'alwaysShowNavOnTouchDevices': 'true'
})

// filtro de imagenes 
$(document).ready(function(){
  var conf = document.querySelector('.container-mix');
  var mixer = mixitup(conf);
  // $('.container-mix').mixitup()
})

// boton activacion menu
$('.categoria-item').on('click',function(){
  $(this).addClass('active-gallery').siblings().removeClass('active-gallery');
});



// alerta contacto aviso
$(document).ready(function(){
  $('#btnsent').click(function(){
    var errores = "";

    //  confirmador contacto nombe*********** 
    if($('#nombre').val() == "" ){
       errores += '<p> <i class="material-icons left">clear</i> Escribir Nombre</p>'
    }
    //  confirmador contacto email***********
    if($('#email').val() == "" ){
      errores += '<p> <i class="material-icons left">clear</i> Ingrse Correo</p>'
   }
   //  confirmador contacto mensaje***********
    if($('#textarea1').val() == "" ){
      errores += '<p> <i class="material-icons left">clear</i>Escriba un Mensaje</p>'
 }
    // mensaje modal errores
    if(errores == "" == false ){
      var mensaje_modal = `<div class="modal-formulario">
                              <div class="mensaje-formulario">
                                  <h4> completar...</h4>
                                  <div class="divider"></div>
                                  ${errores}
                                  <input type="button" class="btn" id="btnCloset"  value= "cerrar" />
                              </div>
                          </div>`
    
        $('body').append(mensaje_modal)
      }

      $('#btnCloset').click(function(){
          $('.modal-formulario').remove();
      })
    
  })
})


// boton de subir scroll up

$(document).ready(function(){

  $('.subir_arriba').hide()

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('.subir_arriba').fadeIn()
    }else{
      $('.subir_arriba').fadeOut()
    }
  })
  $('.subir_arriba').click(function(){
    $('body,html').animate({
      scrollTop:0
    },1000)
  })
})

// preloaded materialize
  window.addEventListener('load',function(){
    $('#contenido').removeClass('hide')
    
  })