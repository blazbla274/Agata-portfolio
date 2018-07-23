var portfolioState = false;
$(document).ready(function(){
  $("nav > ul > li:nth-of-type(1)").click(function(){
      
      if(portfolioState == false) {
          
        portfolioRemoval();
        if(state == false) {aboutMeLoad(0);}
      }
      
      $(".portfolio").css("overflow-y", "scroll");
  });
    
  $(".viewMore").click(function(){
    slideToGalery();
  });
    
  $(".portfolio").scroll(function(){
      let navPosition = parseInt($(".portfolio").scrollTop());
      
      if(navPosition > 150) {
          $("nav").css("height","70px");
      } else {
          $("nav").css("height","0px");
      }
      
      if(navPosition > 700) {
          $(".footer").css("height","30px");
      } else {
          $(".footer").css("height","0px");
      }
  });
});

async function portfolioRemoval() {

  $(".portfolio").css("opacity","1");  
  $("nav").css("opacity","0");    
  $(".name").css("opacity","0");  
    
  $(".portfolio").css("width","100%");
  await sleep(1000);
  portfolioSwitchAnimation();
  await sleep(300);
  $("nav").css("opacity","1"); 
  await sleep(350);
  $(".name").css("opacity","1"); 
  
  portfolioState = true;
}

async function portfolioSwitchAnimation() {
    for(let i = 100; i >= 0; i-=1) {
        $(".portfolio-switch-animation").css("width",i+"%");
        await sleep(11);
        if(i < 80) i--;
    }
    $(".portfolio-switch-animation").css("width","0%");
    $("nav > ul").css("color","black");
}

async function slideToGalery() {
    
    let actulayDistance = parseInt($(".portfolio").scrollTop());
    
    $(".portfolio").animate({
        scrollTop: 1000
    }, 800);
}