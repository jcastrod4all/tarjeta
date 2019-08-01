/* ---- Jquery --- */

$(document).ready(function (){
  var banner = {
    padre : $('#banner'),
    numeroSlides : $('#banner').children('.slide').length,
    posicion : 1
  };

  var info = {
    padre : $('#info'),
    numeroSlides : $('#info').children('.slide').length,
    posicion : 1
  };

  banner.padre.children('.slide').first().css({
    'left' : 0
  });

  info.padre.children('.slide').first().css({
    'left' : 0
  });

  var altoBanner = function () {
    var alto = banner.padre.children('.slide').outerHeight();

    banner.padre.css({
      'height' : alto + 'px'
    });

    console.log(alto);
  }

  var altoInfo = function () {
    var alto = info.padre.children('.active').outerHeight();

    info.padre.animate({
      'height' : alto + 'px'
    });

    console.log(alto);
  }

  var altoContenedor = function() {
    var altoVentana = $(window).height();

    if (altoVentana <= $('#contenedor').outerHeight + 200) {
      $('#contenedor').css({
        'height' : ''
      });
    } else {
      $('#contenedor').css({
        'height' : altoVentana + 'px'
      });
    }
  }

  altoBanner();
  altoInfo();
  //altoContenedor();

  // Adaptar tamaño de carta al contenido
  $(window).resize(function () {
    altoBanner();
    altoInfo();
    altoContenedor();
  })

  $('#info').children('.slide').each(function(){
    $('#botones').append('<span>');
  });

  $('#botones').children('span').first().addClass('active');


  // Banner

  // Boton Siguiente

  $('#banner-next').on('click', function (e){
    e.preventDefault();

    if(banner.posicion < banner.numeroSlides) {
      // Nos aseguramos de que las demas slides empiecen desde la derecha.
      banner.padre.children().not('.active').css({
        'left': '100%'
      });
      // quitamos la clase active y se la ponemos al siguiente elemnto y lo animamos.
      $('#banner .active').removeClass('active').next().addClass('active').animate({
        'left': 0
      });
      // Animamos el slide anterior para que se mueva a la izquierda
      $('#banner .active').prev().animate({
        'left' : '-100%'
      });

      banner.posicion = banner.posicion + 1;
    } 
    else {
      // Hacemos que slide activo en este caso el último se anime hacia la derecha
      $('#banner .active').animate({
        'left' : '-100%'
      });
      // Seleccionamos todos los slides que no tengan la clase .active y 
      // los posicionamos a la derecha
      banner.padre.children().not('.active').css({
        'left': '100%'
      });
      // Eliminamos la clase active se la ponemos al primer elemento
      // Despues lo animamos
      $('#banner .active').removeClass('active');
      banner.padre.children('.slide').first().addClass('active').animate({
        'left' : 0
      });
      // Reseteamos la posicion a 1
      banner.posicion = 1;
    }

  });

  // Boton Anterior
  $('#banner-prev').on('click', function(e){
    e.preventDefault(); 
    if(banner.posicion > 1) {
      banner.padre.children().not('.active').css({
        'left' : '-100%'
      });

      $('#banner .active').animate({
        'left' :'100%'
      });

      $('#banner .active').removeClass('active').prev().addClass('active').animate({
        'left': 0
      });

      banner.posicion = banner.posicion - 1;
    }
    else {
      banner.padre.children().not('.active').css({
        'left' : '-100%'
      });

      $('#banner .active').animate({
        'left' : '100%'
      });

      $('#banner .active').removeClass('active');

      banner.padre.children().last().addClass('active').animate({
        'left': 0
      });

      banner.posicion = banner.numeroSlides;
    }
  });

  // Info

  // Boton Siguiente

  $('#info-next').on('click', function (e){
    e.preventDefault();
    if(info.posicion < info.numeroSlides) {
      // Nos aseguramos de que las demas slides empiecen desde la derecha.
      info.padre.children().not('.active').css({
        'left': '100%'
      });
      // quitamos la clase active y se la ponemos al siguiente elemnto y lo animamos.
      $('#info .active').removeClass('active').next().addClass('active').animate({
        'left': 0
      });
      // Animamos el slide anterior para que se mueva a la izquierda
      $('#info .active').prev().animate({
        'left' : '-100%'
      });

      $('#botones').children('.active').removeClass('active').next().addClass('active');


      if($(window).width() < 698) {
        if($('#info .active').hasClass('portafolio')) {
          $('.contenedor').css('max-width', '850px');
          $('.contenedor').css('height' , '1100px');
        }else {
          altoContenedor();
        }
  
        if($('#info .active').hasClass('presentacion')) {
          $('.contenedor').css('height' , '725px');
        }
      }else if($('#info .active').hasClass('portafolio')) {
          $('.contenedor').css('max-width', '850px');
        }

      info.posicion = info.posicion + 1;
    } 
    else {
      // Hacemos que slide activo en este caso el último se anime hacia la derecha
      $('#info .active').animate({
        'left' : '-100%'
      });
      // Seleccionamos todos los slides que no tengan la clase .active y 
      // los posicionamos a la derecha
      info.padre.children().not('.active').css({
        'left': '100%'
      });
      // Eliminamos la clase active se la ponemos al primer elemento
      // Despues lo animamos
      $('#info .active').removeClass('active');
      info.padre.children('.slide').first().addClass('active').animate({
        'left' : 0
      });

      $('#botones').children('.active').removeClass('active');
      $('#botones').children('span').first().addClass('active');


      if($(window).width() < 698) {
        if($('#info .active').hasClass('portafolio')) {
          $('.contenedor').css('max-width', '850px');
          $('.contenedor').css('height' , '1100px');
        }else {
          altoContenedor();
        }
  
        if($('#info .active').hasClass('presentacion')) {
          $('.contenedor').css('height' , '725px');
        }
      }else if($('#info .active').hasClass('portafolio')) {
          $('.contenedor').css('max-width', '850px');
        }

      // Reseteamos la posicion a 1
      info.posicion = 1;
    }
    altoInfo();
  });

  // Boton Anterior
  $('#info-prev').on('click', function(e){
    e.preventDefault(); 
    if(info.posicion > 1) {
      info.padre.children().not('.active').css({
        'left' : '-100%'
      });

      $('#info .active').animate({
        'left' :'100%'
      });

      $('#info .active').removeClass('active').prev().addClass('active').animate({
        'left': 0
      });

      $('#botones').children('.active').removeClass('active').prev().addClass('active');


      if($(window).width() < 698) {
        if($('#info .active').hasClass('portafolio')) {
          $('.contenedor').css('max-width', '850px');
          $('.contenedor').css('height' , '1100px');
        }else {
          altoContenedor();
        }
  
        if($('#info .active').hasClass('presentacion')) {
          $('.contenedor').css('height' , '725px');
        }
      }else if($('#info .active').hasClass('portafolio')) {
          $('.contenedor').css('max-width', '850px');
        }

      info.posicion = info.posicion - 1;
    }
    else {
      info.padre.children().not('.active').css({
        'left' : '-100%'
      });

      $('#info .active').animate({
        'left' : '100%'
      });

      $('#info .active').removeClass('active');

      info.padre.children().last().addClass('active').animate({
        'left': 0
      });

      $('#botones').children('.active').removeClass('active');
      $('#botones').children('span').last().addClass('active');


      if($(window).width() < 698) {
        if($('#info .active').hasClass('portafolio')) {
          $('.contenedor').css('max-width', '850px');
          $('.contenedor').css('height' , '1100px');
        }else {
          altoContenedor();
        }
  
        if($('#info .active').hasClass('presentacion')) {
          $('.contenedor').css('height' , '725px');
        }
      }else if($('#info .active').hasClass('portafolio')) {
          $('.contenedor').css('max-width', '850px');
        }

      info.posicion = info.numeroSlides;
    }
    altoInfo();
  });

});

// función portafolio
function portafolio() {
  console.log($('#informacion #info .slide').hasClass('portafolio') && $('#informacion #info .slide').hasClass('active'));
  if($('#informacion #info .slide').hasClass('portafolio') && $('#informacion #info .slide').hasClass('active')) {
    $('.contenedor').css('max-width', '850px');
    $('.contenedor').css('height', '1100px');
  }
  else {
    $('.contenedor').css('max-width', '700px');
    altoContenedor();
  }
  
}