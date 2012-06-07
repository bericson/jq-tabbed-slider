$(document).ready(function(){

	// Slider
	$('#slider').bxSlider({
		auto: true,
		autoHover: true,
		speed: 1000,
		pause: 4000,
		controls: true,
		autoControls: true,
		autoDelay: 0,
		prevImage: 'http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-prev-up.png',
		nextImage: 'http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-next-up.png',
		startImage: 'http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-play-up.png',
		stopImage: 'http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-pause-up.png',
		displaySlideQty: 4,
		moveSlideQty: 1,
	});
	document.getElementById('slider').style.visibility='visible';

	// Preload images (script source: http://engineeredweb.com/blog/09/12/preloading-images-jquery-and-javascript)
	(function($) {
		var cache = [];
		// Arguments are image paths relative to the current page.
		$.preLoadImages = function() {
			var args_len = arguments.length;
			for (var i = args_len; i--;) {
			var cacheImage = document.createElement('img');
			cacheImage.src = arguments[i];
			cache.push(cacheImage);
			}
		}
	})(jQuery)

	jQuery.preLoadImages(
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/bg-control-panel.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-continue.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-get-details.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-read-more.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-prev-up.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-prev-over.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-next-up.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-next-over.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-pause-up.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-pause-over.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-play-up.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/btn-play-over.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/callout-caring-over.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/callout-flower-over.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/callout-pre-arr-over.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/callout-cremation-over.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/callout-loc-over.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/callout-death-over.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/callout-monuments-over.png",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/slide-00.jpg",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/slide-01.jpg",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/slide-02.jpg",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/slide-03.jpg",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/slide-04.jpg",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/slide-05.jpg",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/slide-06.jpg",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/slide-loc-sub00.jpg",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/slide-loc-sub01.jpg",
		"http://www.tuftsschildmeyer.com/tabbed-slider-gallery/img/slide-loc-sub02.jpg"
	);

	// Hover states on images
	$(".rollover img").hover(
		function() { this.src = this.src.replace("-up","-over"); },
		function() { this.src = this.src.replace("-over","-up"); }
	);

	// Cylce fade-in/out images on 'Locations Near You' slide
	$('#loc-pics').cycle({
		fx: 'fade',
		speed: 2500
	});

	// Tabs
	$(function() {
//				var currCookie = $.cookie('tabidCookie');
//				alert(currCookie);
		$("#tabs").tabs({
			cookie: {
				expires: 1, // store cookie for a day, without, it would be a session cookie
				name: "tabidCookie"
			},
			selected: 1
//					selected: currCookie
		});
	});

});