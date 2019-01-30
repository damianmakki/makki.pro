$(document).ready(function() {

    $('#navigation').load('../ktp/partials/navigation.html');
    $('#header').load('../ktp/partials/header.html');
    $('#footer').load('../ktp/partials/footer.html');

    $("#open-menu").click(function() {
        $("#navigation").toggle();
    });

    $("#close-menu").click(function() {
        $("#navigation").toggle();
    });

    $(".card--description").shorten({
        "showChars": 250,
        "moreText": "Read More",
        "lessText": "Read Less",
    });

    $("#asp-switch").click(function() {

        $(this).addClass('active');
        $('#camp-switch').removeClass('active');
        $("#asp-select").css('display', 'flex');
        $("#camp-select").hide();

    });

    $("#camp-switch").click(function() {

        $(this).addClass('active');
        $('#asp-switch').removeClass('active');
        $("#camp-select").css('display', 'flex');
        $("#asp-select").hide();

    });
});

$('.slider').slick({
    dots: false,
    slidesToShow: 1
});

$('.features-slider').slick({

    centerMode: true,
    dots: false,
    slidesToShow: 3,

    responsive: [{
            breakpoint: 1024,
            settings: {
                centerMode: true,
                slidesToShow: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerMode: false,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});

//Camp switcher example
$("#lego-robotics-trigger").click(function() {

    $("#lego-robotics").show();
    $("#build-great-cities").hide();
})

$("#build-great-cities-trigger").click(function() {

    $("#lego-robotics").hide();
    $("#build-great-cities").show();
})