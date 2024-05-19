$('.navbar-toggle').click(function(){
	$(this).toggleClass('active');
	$('#SideBar').addClass('active');
	$('.bg-black').toggleClass('active');
});

$('.close-menus').click(function(){
	$('.navbar-toggle').removeClass('active');
	$('#SideBar').removeClass('active');
	$('.bg-black').toggleClass('active');
});

$('.bg-black').click(function(){
	$('.navbar-toggle').removeClass('active');
	$('#SideBar').removeClass('active');
	$('.bg-black').removeClass('active');    
});


/** **/
$(window).scroll(function() {
	var scrollDistance = $(window).scrollTop();

	// Show/hide menu on scroll
	//if (scrollDistance >= 850) {
	//		$('nav').fadeIn("fast");
	//} else {
	//		$('nav').fadeOut("fast");
	//}

	// Assign active class to nav links while scolling
	$('.step-boxes').each(function(i) {
		if ($(this).position().top <= scrollDistance) {
			$('.steps-video-box video.d-none').removeClass('d-block');
			$('.steps-video-box video').eq(i).addClass('d-block');
		}
	});
}).scroll();


jQuery(document).ready(function($) {
	var owl = $('#HomeSlider');
	owl.owlCarousel({
		items: 1,
		dots: true,
		loop: false,
		margin: 0,
		autoplay: true,
		smartSpeed: 1000,
		slideSpeed : 5000,
		autoplayTimeout: 5000,
		autoplayHoverPause: true
	});	
});	

	
jQuery(document).ready(function($) {
	$(".go-down,.go-down a").on("click", function( e ) {
	e.preventDefault();
		$("body, html, .modal").animate({ 
			scrollTop: $( $(this).attr('href') ).offset().top 
		}, 500);
	});
});	
  jQuery(document).ready(
  function() {

    var $w = $(window);
    var $d = $('#oh');
    var $y = $('#yeah');
    var $c = $('#commom');
    var $b = $('#baby');

    var lastScrollTop = $w.scrollTop();

    var _x = 0;
    var _y = 0;

    $(window).scroll(function(event) {
      var st = $w.scrollTop();

      _x = st;
      _y = st;

      lastScrollTop = st;
      
      $d.css('right', _x);
      $d.css('bottom', _y);
      
      $y.css('left', _x);
      $y.css('top', _y);
      
      //-----------
      var $myElement = $('#second-container'),
        canUserSeeIt = inViewport($myElement);
        
        
        if(canUserSeeIt){
          $c.css({'right': _y});
          $b.css({'left': _x});
        }
    });
    
    //check if el is visible in viewport
    function inViewport($ele) {
      var lBound = $(window).scrollTop(),
        uBound = lBound + $(window).height(),
        top = $ele.offset().top,
        bottom = top + $ele.outerHeight(true);

      return (top > lBound && top < uBound) ||
        (bottom > lBound && bottom < uBound) ||
        (lBound >= top && lBound <= bottom) ||
        (uBound >= top && uBound <= bottom);
    }
  });
jQuery(document).ready(function($) {
	$('.navbar-nav').find(".dropdown > a").append('<span class="dropdown-arrows"></span>');
	$('.dropdown-arrows').on('click', function(event) {
		event.preventDefault(); 
		event.stopPropagation(); 
		$(this).parent().parent().siblings().removeClass('show');
		$(this).parent().parent().toggleClass('show');
	});
});	

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0          // default
   }
)
wow.init();