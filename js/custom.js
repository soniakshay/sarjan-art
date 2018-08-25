(function($) {
	$(function() {
		$("#scroller").simplyScroll();
	});
})(jQuery);
(function($) {
	$(function() {
		$("#scroller2").simplyScroll({direction:'backwards'});
	});
})(jQuery);

	new WOW().init();
	var wow = new WOW(
		{
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,       // trigger animations on mobile devices (default is true)
		live:         true,       // act on asynchronously loaded content (default is true)
		}
	);
	wow.init();
$(document).ready(

  function() { 

    $("#ccontent").niceScroll();

  }

);
var nice = false;

$(document).ready(

  function() { 

    nice = $("#ccontent").niceScroll();

  }

);
$(document).ready(

  function() { 

    $("#ccontent").niceScroll({cursorcolor:"#00F"});

  }

);

  $(document).ready(

  function() { 

    $("#ccontent").niceScroll("#wrapperdiv",{cursorcolor:"#00F"});

  }

);
var nice = $("#ccontent").getNiceScroll();

$("#ccontent").getNiceScroll().hide();
$("#ccontent").getNiceScroll().resize();

  $(function() {
    $(".rslides").responsiveSlides();
  });
$(".rslides").responsiveSlides({
	auto: true,             // Boolean: Animate automatically, true or false
	speed: 500,            // Integer: Speed of the transition, in milliseconds
	timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
	pager: true,           // Boolean: Show pager, true or false
	nav: false,             // Boolean: Show navigation, true or false
	random: false,          // Boolean: Randomize the order of the slides, true or false
	pause: false,           // Boolean: Pause on hover, true or false
	pauseControls: true,    // Boolean: Pause when hovering controls, true or false
	prevText: "Previous",   // String: Text for the "previous" button
	nextText: "Next",       // String: Text for the "next" button
	maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
	navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'	
	manualControls: "",     // Selector: Declare custom pager navigation
	namespace: "rslides",   // String: Change the default namespace used
	before: function(){},   // Function: Before callback
	after: function(){}     // Function: After callback
});