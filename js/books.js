
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
  
  //앞부분

/* 
//BOOK OF MONTH 부분 시작
*/
$(function(){

  //초기설정

  $(".monthList").css("width", 700*$('.listColl').size()+"px");
  //.monthList 의 너비는 .listColl*700 이므로 해당 설정

  $(".listColl:last").prependTo(".monthList");
  $(".monthList").css("margin-left","-700px");
  
  //Left Control
  $(".monthGallLeft").on("click",function(){
    $(".monthGallLeft,.monthGallRight").hide();
    //애니메이션을 위해 숨긴다
    $(".monthList").animate({
        marginLeft : parseInt($(".monthList")
        .css("margin-left"))+700+"px"
        },"slow","swing",
        //속성은 무조건 ""안에 넣을것 
        function(){
        $(".monthList").css("margin-left","-700px");
        $(".monthList .listColl:last").prependTo(".monthList");
        $(".monthGallLeft,.monthGallRight").show();
        
      });
      
    });

  //Right Control
  $(".monthGallRight").on("click",function(){

    $(".monthGallRight,.monthGallLeft").hide();
    $(".monthList").animate({
      marginLeft : parseInt($(".monthList")
      .css("margin-Left"))+-700+"px"
    },"slow","swing",
    function(){

      $(".monthList").css("margin-left","-700px");
      $(".listColl:first").appendTo(".monthList");
      $(".monthGallLeft,.monthGallRight").show();


    }
    );

  });
    
});
