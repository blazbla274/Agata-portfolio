var state = true;
$(document).ready(function(){
  $("nav > ul > li:nth-of-type(2)").click(function(){ //About me
    aboutMeLoad(10);
  });
    
  $("nav > ul > li:nth-of-type(3)").click(function(){  //contact
    $(".contact").css({"opacity":"0.95", "transform":"translateY(0%)"});
  });
  $(".contact-exit").click(function(){
    $(".contact").css({"opacity":"0.5", "transform":"translateY(100%)"});
  });
});

async function aboutMeLoad(ms) {
    await sleep(ms);
    
    $(".about-me").toggleClass("animate");
    $(".about-me").toggleClass("animate2");
    
    if(state){
        $("body > span").css("color","#b9b9b9");
    } else {
        $("body > span").css("color","black");
    }
    state = !state;
}