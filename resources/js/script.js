$(document).ready(function() {
	/*For the sticky navigation*/
	var waypoints = $('.js-section-features').waypoint({
	  handler: function(direction) {
	  	if (direction == "down") {
	  		console.log("down");
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}	   
	  },
	  offset: '60px'
	});

	/*Scroll on buttons*/
	$('.js-scroll-to-plans').click(function() {
		$('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
	});

	$('.js-scroll-to-start').click(function() {
		$('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 1000);
	});

	/*Navigation scroll*/
	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
  	});

	/*Animations on scroll*/
	$('.js--wp-1').waypoint(function(direction) {
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	$('.js--wp-2').waypoint(function(direction) {
		$('.js--wp-2').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});

	$('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	$('.js--wp-4').waypoint(function(direction) {
		$('.js--wp-4').addClass('animated pulse');
	}, {
		offset: '50%'
	});

	/*Mobile navigation*/
	$('.js--nav-icon').click(function() {
		var nav = $('.ja--main-nav');
		var icon = $('.js--nav-icon i');
		console.log(icon);
		if(icon.hasClass('ion-navicon-round')) {
			icon.removeClass('ion-navicon-round');
			icon.addClass('ion-close-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
		nav.slideToggle(200);

	});

	var map = new GMaps ({
		div: '.map',
		lat: 48.523638,
		lng: 32.2602433,
		zoom: 17
	});

	map.addMarker({
		lat: 48.5230267,
		lng: 32.257751,		
		title: 'Omnifood',
		infoWindow: {
			content: '<p>HTML Content</p>'
		}
	});

});