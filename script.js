/* optional JS using jQuery */

/* fixed navbar on scroll */
var stickyNavTop = $('#navbar').offset().top;
$(window).on('scroll', function() {
  if ($(window).scrollTop() + $('#navbar').height() > stickyNavTop - 1) {
    $('#navbar').addClass('fixed');
  } else {
    $('#navbar').removeClass('fixed');
  }
});

/* smooth scroll anchor */
$(function() {
  $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      $('#navbar').addClass('fixed');
      $('html, body').animate({
        scrollTop: target.offset().top - $('#navbar').height()
      }, 350);
      return false;
    }
  });
});






$(function(){
	var $slider = $('.slider')
	var $slides = $slider.find('.slides');
	var $slide = $slides.find('.slide');
	var pause = 2500;
	var CurrentSlide= 1;
	var interval; 
	
	function startSlider(){
		interval = setInterval(function(){
			$slides.animate({ 'margin-left' : '-=400px'} ,1000, function (){
				CurrentSlide++;
				if(CurrentSlide== $slide.length) {
					CurrentSlide=1;
					$slides.css( 'margin-left', 0);
				}
			});
		} , pause);
	}
	
	function stopSlider(){
		clearInterval(interval);
	}
	
	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
	
	startSlider();
});