// menu scroll by click
$(document).ready(function(){

    $("#home").click(function() {
        $('html, body').animate({
            scrollTop: $("#banner").offset().top
        }, 1000);
    });
//

    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-about").offset().top
        }, 1000);
    });
//   move-icon-down


    //   move-icon-down
    $("#project").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-project").offset().top
        }, 1000);
    });

//
    $("#gallery").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-gallery").offset().top
        }, 1000);
    });

//
    $("#contact").click(function() {
        $('html, body').animate({
            scrollTop: $(".foot").offset().top
        }, 1000);
    });
//




});
