$(document).ready(function() {
	$('.work-slider').slick({
		dots: true,
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
  		autoplaySpeed: 3000
	});

	$('.team-slider').slick({
		slidesToShow:3,
		infinite: true
	});

	$(".navbar-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

  	$(".contact__link-up").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".navbar-brand").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

});

var map,
		marker;

	var mapWrap = document.getElementById('map');

	function initMap() {
   		map = new google.maps.Map(mapWrap, {
   			center : {lat : 40.7263901, lng : -74.2285755},
   			zoom : 14
   		});

   		marker = new google.maps.Marker({
	   		position : {lat : 40.7293901, lng : -74.2285755},
	   		map : map,
	   		icon : '../img/marker.png'
   		});
 	};

