$('.portfolio-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout:5000,
        autoplaySpeed:5000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  })




$(function() {
  var header = $(".navbar");

  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          header.addClass("scrolled");
      } else {
          header.removeClass("scrolled");
      }
  });
});


$(document).ready(function()  {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
});


$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});


$(document).ready(function() { 
$('.navbar li a').on( 'click', function(event) {
	var target 	= $( this );
    var element = target.attr('href');
    var navHeight = $("nav").height()
    
    $("body, html").animate({ 
      scrollTop: $( element ).offset().top - navHeight	
    }, 200);

});
}); 



