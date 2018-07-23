function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function() {
    
    $(".portfolio").css("overflow-y", "hidden");
    navAnimate();
    
    aboutMeLoad(1100);
    
    portfolioContainerImgRotate();
    
    async function navAnimate() {
        
        await sleep(300);
        $("nav > ul > li:nth-of-type(1)").addClass("animate");
        await sleep(150);
        $("nav > ul > li:nth-of-type(2)").addClass("animate");
        await sleep(200);
        $("nav > ul > li:nth-of-type(3)").addClass("animate");
    }

});

var rotateId = 1;
var rotateState = [false,false,false];
async function portfolioContainerImgRotate() {
    
    let deg;
    if(rotateState[rotateId]) {deg = 0;} 
    else {deg = 180;}
    
    rotateState[rotateId] = !rotateState[rotateId];
    
    switch(rotateId) {
        case 1: $(".portfolio-container-main > div:nth-of-type(1)").css("transform","translateX(60px) rotateY("+deg+"deg)");
            break;
        case 2: $(".portfolio-container-main > div:nth-of-type(2)").css("transform","translateY(-80px) rotateY("+deg+"deg)");
            break;
        case 3: $(".portfolio-container-main > div:nth-of-type(3)").css("transform","translateX(-60px) rotateY("+deg+"deg)");
            break;
                   }
    
    rotateId += 1;
    if(rotateId > 3) {rotateId = 1;}
        
    await sleep(5000);
    portfolioContainerImgRotate();
}