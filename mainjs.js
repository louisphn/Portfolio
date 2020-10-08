var anim;

var animData = {
    container: document.getElementById('loader'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    rendererSettings: {
        progressiveLoad:false
    },
    path: 'data.json'
};

anim = bodymovin.loadAnimation(animData);

$('.abc').width($(".col-md-8.col-sm-12.col-xs-12").width());

$(function(){
      setTimeout(function(){$("#loader").hide()},2500);
      setTimeout(function(){$("#whole-page").show()},2501);
});

$(".education").click(function(){
  $("#about").hide();
  $("#background").show();
})

$(".learnmore").click(function(){
  $(".overlay").toggleClass("transition");
  $("#whole-page").hide();
  setTimeout(function(){window.location.href = "about.html"},2300);
});


$("#mybutton").click(function(){
  $(this).text(function(i, v){ return v === 'Bui Thi Xuan High School' ? 'Tokyo International University' : 'Bui Thi Xuan High School' });
  $(".buithixuan").toggle();
  $(".tokyo").toggle();
});

$(".hamburger").click(function(){
  $(".menu").toggle([25]);
  $(".container").toggle();
  $(".menu").toggleClass("menu-active");
  $(".hamburger").toggleClass("is-active");
  $(".btn.btn-outline-secondary").toggle();
});
$(".work").click(function(){
  $("#whole-page").hide();
  $("#workexp").show();
})
$( ".card" ).hover(
  function() {
    $(this).addClass('shadow-lg').css('cursor', 'pointer');
  }, function() {
    $(this).removeClass('shadow-lg');
  });
