// When the document is ready execute the JQuery
$("document").ready(function() {

// $(".wrapper").css("width", 500);
$("#title").css("color", "purple"); // target for ID
$("a").css("color", "red"); //target for html tagAll a red
$("em + a").css("color", "orange"); // target the first element after some html tag
$("p > em").css("color", "green") // target child tags
$(".teste > em").css("color", "red"); //target child tags use class or Id
$(".list li:nth-child(3)").css("color", "blue");
$("li[name]").html("'ADD NEW TEXT IN LI'"); //change html contect use tag [name]
$(".name").html("<i>CHANGE TEXT USE CLASS NAME</i>"); // change html content use class name
$("input[type='text']#yourName").val("Placeholder"); // add value input use .val to change Placeholder
$("img[alt^='NTT']").css({
  "border-color": "bloack",
  "border-width": "2px",
  "border-style": "solid"
}).width(200); // target img use alt tag

$("a[href^='http://g").css("color", "cyan").html("CHANGE LINK"); //target link use href with the symbol ^ target the begining
$("a[href$='pdf']").css("color", "red"); //target links use href with the symbol $ you target the end of the sentence
$("#tableData tr:even").css("background-color", "#fffdd0");
$("#tableData tr:odd").css("background-color", "#ccc");
$("#tableData tr:first").css({
  "background-color": "#0df",
  "color": "#fff"
});
$("#oListTypes li:not(:contains(and))").css("color", "#7dd");

$("li:contains(gravida)").css({
  "background-color": "#d79",
  "color": "#fff"
}); //targe use contains parf of text and chage css



$("p:has(i)").hide(); // Id <p> tag have <i> tag they hide all
alert($("p:has(i)").html());


$("p:has(i)").html("<i>Back change text and show").show();
$("p:has(i)").append(" {append text in the end}");
$("p:has(i)").prepend("[prepend text in the beginning] ");
$("p:has(i)").before("<p class='p_before'>New text use before jquery - <span class='color'>CLIK HERE TO REPLACE TEXT</span></p> ");
$("p:has(i)").after("<p class='p_after'>New text use after jquery - <span class='color'>CLIK HERE TO REMOVE<span></p> ");

$("#p_after").css("color", "#567444")

$(".p_after").click(function() {
  $(this).remove();
});

$(".p_before").click(function() {
  $(this).replaceWith('<p>I\'m the new text </p>')
  /* Act on the event */
});

$("#oListIndent li").click(function() {
  $(this).toggleClass("highlight");

  var addText = $(this).text();
  $("input[type=text]#yourList").val(addText);

});  // Togle Class when click


// $("#oListIndent li").click(function() {
//   $(this).toggleClass("highlight");
//
//   var bgColor = $(this).css("background-color");
//   $("input[type=text]#yourList").val(bgColor);
//
// });

$("#logo").click(function() {
  var imgName = $(this).attr("alt");
  $("input[type=text]#yourLogo").val(imgName);
});

$("#img").mouseover(function() {
  $(this).attr("src", "https://image.freepik.com/free-icon/arrow-bold-right-ios-7-symbol_318-35504.jpg");
});
$("#img").mouseout(function() {
  $(this).attr("src", "https://image.freepik.com/free-icon/arrow-bold-left-ios-7-interface-symbol_318-34824.jpg");
});

$(".bottom").hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this).addClass("active");
    }, function() {
    /* Stuff to do when the mouse leaves the element */
    $(this).removeClass("active")

});

$(document).click(function(e) {
  $("#mClickXPos").val(e.pageX);
  $("#mClickYPos").val(e.pageY);
});

$(document).mousemove(function(e) {
  $("#mMoveXPos").val(e.screenX);
  $("#mMoveYPos").val(e.screenY);
});

$(document).keypress(function(e) {
  var keyPressed = String.fromCharCode(e.which);
  $("#keyPress").val(keyPressed);
});

$("#inputFormEvent").blur(function(e) {
  $("#formEvent").text("Left input Element")
});

$("#inputFormEvent").change(function(e) {
  $("#formEvent").text("Left input Change")
});

$("#inputFormEvent").focus(function(e) {
  $("#formEvent").text("Left input Focus")
});

$("#inputFormEvent").select(function(e) {
  $("#formEvent").text("Left input Selected")
});

function showWhatTouched(e){
  alert(e.data.message);
}

var bsMsg = {message: "Best Selling Childrens Books"};
var beMsg = {message: "Best event this Year"};

$("#bestSelling").on("click", bsMsg, showWhatTouched);
$("#bestEvents").on("click", beMsg, showWhatTouched);


var sliderImg = ["img/1.png", "img/2.png", "img/3.png", "img/4.png"];

var focusImg = 1;

$("#slider").click(function() {
  var image = sliderImg[focusImg];
  focusImg++;
  if(focusImg > 3){
    focusImg = 0;
  }
  $("#slider").attr("src", image);
});




});
