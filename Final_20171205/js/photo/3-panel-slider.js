$(function() { 

var slideTiming = 10000; 
var animationTime = 500; 
var controlsHideTime = 200; 
var current = 1; 


$("#slider-panels-next").hide();
$("#slider-panels-previous").hide();


$("#slider-panels").hover(function(){
$("#slider-panels-next").show("drop", { direction: "right" }, controlsHideTime);
$("#slider-panels-previous").show("drop", { direction: "left" }, controlsHideTime);
},function(){
$("#slider-panels-next").hide("drop", { direction: "right" }, controlsHideTime);
$("#slider-panels-previous").hide("drop", { direction: "left" }, controlsHideTime);
});


function check_slide(){
$("#slider-panel-left-carousel").animate({"right": -(300*(current-1))}, animationTime, "easeInOutExpo");
$("#slider-panel-center-carousel").animate({"top": -(400*(current-1))}, animationTime, "easeInOutExpo");
$("#slider-panel-right-carousel").animate({"left": -(300*(current-1))}, animationTime, "easeInOutExpo");	
$('.slider-dot').removeClass('slider-dot-current');
$('.slider-dot[data-slide="'+current+'"]').addClass('slider-dot-current');
}


function nextslide() {if(current==total_slides){current = 1}else{current++} check_slide();}
function previousslide() {if(current==1){current = total_slides}else{current--} check_slide();}


$("#slider-panels-next").click(function() {nextslide();});
$("#slider-panels-previous").click(function() {previousslide();});



var refreshIntervalId = setInterval(nextslide, slideTiming);


var total_slides = 0;
$("#slider-panel-images img").each(function() {
total_slides++;
$("#slider-panel-left-carousel").append('<div class="slider-panel-left-carousel-tab"><img src="'+$(this).attr('src')+'" width="'+$(this).attr('width')+'" height="'+$(this).attr('height')+'" /></div>');
$("#slider-panel-center-carousel").append('<div class="slider-panel-center-carousel-tab"><img src="'+$(this).attr('src')+'" width="'+$(this).attr('width')+'" height="'+$(this).attr('height')+'" /></div>');
$("#slider-panel-right-carousel").append('<div class="slider-panel-right-carousel-tab"><img src="'+$(this).attr('src')+'" width="'+$(this).attr('width')+'" height="'+$(this).attr('height')+'" /></div>');
$("#slider-dots").append('<div class="slider-dot" data-slide="'+total_slides+'"></div>');
$("#slider-panel-left-carousel").css('width',(300*total_slides));
$("#slider-panel-right-carousel").css('width',(300*total_slides));
$("#slider-panel-center-carousel").css('height',(400*total_slides));
$("#slider-dots").css('width',(total_slides*26));
});


$(".slider-dot").click(function() { current = $(this).attr('data-slide'); check_slide();  });


check_slide();

});