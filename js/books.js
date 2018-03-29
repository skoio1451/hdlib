
$(function(){
    $("ul.mapTabPanel li:not("+$("ul.mapTab li>a.selected").attr("href")+")").hide();
    $("ul.mapTab>li a").click(function(){
      $("ul.mapTab>li a").removeClass("selected");
      $(this).addClass("selected");

      $("ul.mapTabPanel li").fadeOut();
      $($(this).attr("href")).fadeIn();


    });
});

$(function(){
    $("ul.rankTabPanel li:not("+$("ul.rankTab li>a.selected").attr("href")+")").hide();
    $("ul.rankTab li a").click(function(){
      $("ul.rankTab li a").removeClass("selected");
      $(this).addClass("selected");
      $("ul.rankTabPanel li").fadeOut();
      $($(this).attr("href")).fadeIn();


    });
});
