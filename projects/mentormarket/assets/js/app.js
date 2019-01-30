$("#left-mentor").click(function(){
    $("#right-mentee").hide();
    $("#right-mentor").show();
    $("#left-mentee").removeClass("active");
    $("#left-mentor").addClass("active")
});

$("#left-mentee").click(function(){
	$("#left-mentee").addClass("active");
	$("#left-mentor").removeClass("active");
    $("#right-mentor").hide();
    $("#right-mentee").show();
});
