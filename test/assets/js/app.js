$(document).ready(function(){

	$('#carousel').slick({
		infinite: 		true,
		slidesToShow: 	1,
		centerMode: 	true,
		arrows: 		false
	});

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

});