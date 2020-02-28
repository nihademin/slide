var btLeft=document.getElementById("btnLeft");
var btRight=document.getElementById("btnRight")
var allsSlide=document.querySelectorAll(".slide-item")
var hazirkislide= 0;
btLeft.onclick=function(){
    sliderAll(hazirkislide-1)
}
btRight.onclick=function(){
    sliderAll(hazirkislide+1)
}

function sliderAll(say){
    allsSlide[hazirkislide].className="slide-item"
    hazirkislide = (say + allsSlide.length) % allsSlide.length;
    allsSlide[hazirkislide].className="slide-item active"
}

document.addEventListener("keyup", function(e){
    if(e.keyCode==39){
        sliderAll(hazirkislide+1)
    }else if(e.keyCode==37){
        sliderAll(hazirkislide-1)
    }
})