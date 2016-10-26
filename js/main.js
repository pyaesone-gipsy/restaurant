$(document).ready(function() {

// Scroll to sections
  $("nav > ul > li > a").on("click", function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    var speed = 700;

    $("html, body").animate({
      scrollTop: $(section).offset().top
    }, speed);
  });

// Menu toggle show and hide
  $(".menu-button").on("click", function() {
    $("nav ul").toggleClass("visible");
    $("nav").toggleClass("bg");
  });

// Close nav on link click
  $("nav li a").on("click", function() {
    $("nav ul").toggleClass("visible");
    $("nav").toggleClass("bg");
  });

// Buttons click
  $(".btn-book").on("click", function() {
    var nameField = $("form input").first();
    $("html, body").animate({
      scrollTop: $(nameField).offset().top - 40
    }, 700);
    $(nameField).focus();
  });

  $(".btn-menu").on("click", function() {
    $("html, body").animate({
      scrollTop: $("#menu-section").offset().top
    }, 700);
  });
});
