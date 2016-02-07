(function($) {
  $(document).ready(function(){
    var heroCounter = 0;
    var heros = ['http://placekitten.com/2400/1200','http://placekitten.com/2400/1600','http://placekitten.com/1600/1200'];

    window.setInterval(function(){
      $('#hero').css('background','url('+heros[heroCounter]+')');
      incrementCounter();
    }, 5000);

    var incrementCounter = function(){
      if (heroCounter == heros.length - 1) {
        heroCounter = 0;
      } else {
        heroCounter += 1;
      }
    };

    $('.links a').click(function(e){
      e.preventDefault();
      var targetEl = $(this).attr('href');
      $('body').animate({ scrollTop: $(targetEl).offset().top - 140}, 1000);
    });

    $(window).scroll(function(){
      if ( $(this).scrollTop() != 0 && !$('#nav').hasClass('fixed') ) {
        $('#nav').addClass('fixed');
      } else if ( $(this).scrollTop() == 0 ) {
        $('#nav').removeClass('fixed');
      }
    });
  });
})(jQuery);