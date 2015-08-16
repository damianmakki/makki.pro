$(document).ready(function(){
	$('#carousel').slick({
		dots: true,
		lazyLoad: 'ondemand',
		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
		speed: 500
	});
});
