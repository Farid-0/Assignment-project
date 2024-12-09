(function ($) {
	

$(window).on('load', function () {
	wowAnimation();
});

// mobile menu

$('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "767"
  });


// slick slider
$('.blog-active').slick({
	dots:true,
	infinite: true,
	speed: 50,
	autoplay: true,
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow:'<button type="button" class="slick-prev"> <i class="fa-solid fa-arrow-right"></i></button>',
	nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-left"></i></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});

// wow active
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}


})(jQuery);