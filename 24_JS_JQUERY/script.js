// jQuery basic syntax
// $("selector").action();

// Document ready function
// Ensures HTML is fully loaded before jQuery runs
$(document).ready(() => {

    // Select element by ID and apply CSS
    $("#para-0").css("color", "pink");

    // Select element by class and change font size
    $(".para1").css("font-size", "25px");

    // Apply another CSS property to same class
    $(".para1").css("color", "brown");

    // Select <p> directly inside <div>
    $("div > p").css("color", "red");

    // Attribute selector: selects all elements having href attribute
    $("[href]").css("color", "lime");

    // Remove underline from anchor tag
    $("[href]").css("text-decoration", "none");

    // Select all list items inside ul
    $("ul > li").css("color", "skyblue");
});
