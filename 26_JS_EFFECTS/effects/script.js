
$(document).ready(() => {
    //hide effect
    $("#hide").click(() => {
        $("#img").hide();
    });
    //show
    $("#SHOW").click(() => {
        $("#img").show();
    });
    //toggle
    $("#TOGGLE").click(() => {
        $("#img").toggle();
    });
    //fadeIn
    $("#fadeIn").click(() => {
        $("#img").fadeIn(1000);
    });
    //fadeOut
    $("#fadeOut").click(() => {
        $("#img").fadeOut(1500);
    });
    //fadeToggle
    $("#FadeToggle").click(() => {
        $("#img").fadeToggle(1500);
    });
    //slideUp
    $("#slideUp").click(() => {
        $("#img").slideUp(1500);
    });
    //slideDown
    $("#slideDown").click(() => {
        $("#img").slideDown(1500);
    });
    //slideToggle
    $("#slideToggle").click(() => {
        $("#img").slideToggle(1500);
    });
    //stop
    $("#stop").click(() => {
        $("#img").stop();
    });

});