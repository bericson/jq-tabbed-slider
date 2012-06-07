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
		prevImage: 'img/btn-prev-up.png',
		nextImage: 'img/btn-next-up.png',
		startImage: 'img/btn-play-up.png',
		stopImage: 'img/btn-pause-up.png',
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
		"img/bg-control-panel.png",
		"img/btn-continue.png",
		"img/btn-get-details.png",
		"img/btn-read-more.png",
		"img/btn-prev-up.png",
		"img/btn-prev-over.png",
		"img/btn-next-up.png",
		"img/btn-next-over.png",
		"img/btn-pause-up.png",
		"img/btn-pause-over.png",
		"img/btn-play-up.png",
		"img/btn-play-over.png",
		"img/callout-caring-over.png",
		"img/callout-flower-over.png",
		"img/callout-pre-arr-over.png",
		"img/callout-cremation-over.png",
		"img/callout-loc-over.png",
		"img/callout-death-over.png",
		"img/callout-monuments-over.png",
		"img/slide-00.jpg",
		"img/slide-01.jpg",
		"img/slide-02.jpg",
		"img/slide-03.jpg",
		"img/slide-04.jpg",
		"img/slide-05.jpg",
		"img/slide-06.jpg",
		"img/slide-loc-sub00.jpg",
		"img/slide-loc-sub01.jpg",
		"img/slide-loc-sub02.jpg"
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
		$("#tabs").tabs({
			selected: 1
		});
	});

});