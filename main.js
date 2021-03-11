var btnLeft =$('i.fas.fa-angle-left');
var btnRight =$('i.fas.fa-angle-right');
var imgMove = $('.images img');
var circle =$('.fa-circle');
var displayedImg = 0;

$(document).ready(function() {
    imgSlider();
});

function imgSlider() {
    btnRight.click(function(){
        imgMove.eq(displayedImg).removeClass('active');
        circle.eq(displayedImg).removeClass('active');
        if(displayedImg < 3){
            displayedImg++;
        }
			
		else{
            displayedImg=0;
        }
			
        imgMove.eq(displayedImg).addClass('active');
        circle.eq(displayedImg).addClass('active');
    });

    btnLeft.click(function(){
        imgMove.eq(displayedImg).removeClass('active');
        circle.eq(displayedImg).removeClass('active');
        if(displayedImg > 0){
            displayedImg--;
        }
			
		else{
            displayedImg=3;
        }
			
        imgMove.eq(displayedImg).addClass('active');
        circle.eq(displayedImg).addClass('active');
    });
}



