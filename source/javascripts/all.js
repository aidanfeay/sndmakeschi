(function($) {
  $(document).ready(function(){
    var heroCounter = 0;
    var heros = ['../images/example_product_3.jpg','../images/example_product_2.jpg'];

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