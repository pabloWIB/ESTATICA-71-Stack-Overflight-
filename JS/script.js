$(function(){
    setTimeout(function(){
        $("#navigationID").addClass("navigationIDAnimation");
    }, 700);
});

$(function(){
    setTimeout(function(){
        $("#headerID").addClass("headerIDAnimation");
    }, 1000);
});

$(function(){
	$("#hoverStateN1").hover(function(e){
		$("#underlineN1").toggleClass("underlineN1Hover");
	});
});

$(function(){
	$("#hoverStateN2").hover(function(e){
		$("#underlineN2").toggleClass("underlineN1Hover");
	});
});

$(function(){
	$("#hoverStateN3").hover(function(e){
		$("#underlineN3").toggleClass("underlineN1Hover");
	});
});

$(function(){
	$("#hoverStateN4").hover(function(e){
		$("#underlineN4").toggleClass("underlineN1Hover");
	});
});

$(function(){
	$("#hoverStateN5").hover(function(e){
		$("#underlineN5").toggleClass("underlineN1Hover");
	});
});

const navigationID = document.getElementById('navigationID');
    
function scrollValue() {
    var scroll = window.scrollY;
    if (scroll < 110) {
        navigationID.classList.remove('edit');
    } else {
        navigationID.classList.add('edit');
    }
}

window.addEventListener('scroll', scrollValue);

$(function(){
	$("#burgerToggle").click(function(e){
		$("#burgerToggle").toggleClass("burgerToggle");
        $("#overflow").toggleClass("overflowAction");
	});
});


const overflow = document.getElementById('overflow');
    
function scrollValue2() {
    var scroll = window.scrollY;
    if (scroll < 110) {
        overflow.classList.remove('editoverflow');
    } else {
        overflow.classList.add('editoverflow');
    }
}

window.addEventListener('scroll', scrollValue2);