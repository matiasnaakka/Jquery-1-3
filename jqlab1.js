'use strict'


$('p:first').remove();



$('p:last-of-type').css("background-color", "grey");
$('p:last-of-type').css("color", "white");


$(document).ready(function () {
    $("#button").click(function () {
        $("#fdiv").append("<p id=\"tp\">Hello user</p>");
    });
});

$("#4p").hide();

$('#fdiv').hover(function () {
        $('#4p').show().text("About to select link...");

    },
    function () {
        $("#4p").hide();
    });



