$(document).ready(function(){

	$('#carousel').slick({
		infinite: 		true,
		slidesToShow: 	1,
		centerMode: 	true,
		arrows: 		false
	});

	$(".nav").click(function(e) {

		if( $('.menu').hasClass("fadeInUp") ) {
			$('.menu').removeClass("fadeInUp").addClass("fadeOutDown");
		} else {
            ('.menu').addClass("fadeInUp");
        }

    });

});
