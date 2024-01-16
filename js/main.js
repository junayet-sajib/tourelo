$(document).ready(function(){
    $('.navbar ul li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
  });
  });