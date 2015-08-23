$(document).ready(function(){

	$('#carousel').slick({
		infinite: 		true,
		slidesToShow: 	1,
		centerMode: 	true,
		arrows: 		false
	});


	//Menu
	$(".menu-burger").click(function(e) {
		if($(".menu").hasClass("opened")) {
         // if it's open then just close it
         $(".menu").removeClass("opened");
         $(".menu").addClass("closed");
     } else {
	         // if it's closed, then close everything else and open it
	         $(".menu").removeClass("closed");
	         $(".menu").addClass("opened");
	     }
	 });

	//Case Study bottom margin
	$(function(){

		var $metaHeight = $('.meta').height();
		$('.case-study').css('margin-bottom', $metaHeight);

		var $window = $(window).on('resize', function(){
			var $metaHeight = $('.meta').height();
			$('.case-study').css('margin-bottom', $metaHeight + 60);
    }).trigger('resize'); //on page load

	});

	$(function(){
		$('.meta-tab').bind('click', function() {
			$('.meta').toggleClass('active');
		});
	});

});