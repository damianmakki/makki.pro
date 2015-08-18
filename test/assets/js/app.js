$(document).ready(function(){

	$('#carousel').slick({
		infinite: 		true,
		slidesToShow: 	1,
		centerMode: 	true,
		arrows: 		false
	});

	$(".menu-burger").click(function(e) {
      if($(".menu").hasClass("open")) {
         // if it's open then just close it
         $(".menu").removeClass("open");
      } else {
         // if it's closed, then close everything else and open it
         $(".menu").removeClass("open");
         $(".menu").addClass("open");
      }
      /* TODO: now do something similar with icon-arrow */
   });

});
