$(document).ready(function() {

  $("nav > ul > li > a").on("click", function(e) {
    e.preventDefault();
    section = $(this).attr("href");
    speed = 700;

    $("html, body").animate({
      scrollTop: $(section).offset().top
    }, speed);
  });

});
