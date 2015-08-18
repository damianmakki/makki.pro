$(document).ready(function(){

	$('#carousel').slick({
		infinite: 		true,
		slidesToShow: 	1,
		centerMode: 	true,
		arrows: 		false
	});

	$(".menu").click(function(e) {
      if($(this).hasClass("open")) {
         // if it's open then just close it
         $(this).removeClass("open");
      } else {
         // if it's closed, then close everything else and open it
         $(".more").removeClass("open");
         $(this).addClass("open");
      }
      /* TODO: now do something similar with icon-arrow */
   });

});
