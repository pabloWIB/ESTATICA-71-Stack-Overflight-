// LOAD ANIMATIONS

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

// LOAD ANIMATIONS ---

// 'A' HOVER ANIMATIONS

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

// 'A' HOVER ANIMATIONS ---

// NAVIGATION BAR REDUCE ONSCROLL ANIMATION

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

// 1 NAVIGATION BAR REDUCE ONSCROLL ANIMATION MEDIA (875px) 

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

// 1 NAVIGATION BAR REDUCE ONSCROLL ANIMATION MEDIA (875px) ---

// NAVIGATION BAR REDUCE ONSCROLL ANIMATION ---

// OVERFLOW TOGGLE

$(function(){
	$("#burgerToggle").click(function(e){
		$("#burgerToggle").toggleClass("burgerToggle");
        $("#overflow").toggleClass("overflowAction");
	});
});

// OVERFLOW TOGGLE ---

// VIEWPORT FUNCTION

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// VIEWPORT FUNCTION ---

// VIEWPORT ANIMATIONS 1

function toggleAnimationN1() {
    var targetSection = document.getElementById("mainID1");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    } 
}

window.addEventListener("scroll", toggleAnimationN1);
window.addEventListener("resize", toggleAnimationN1);

toggleAnimationN1();

// VIEWPORT ANIMATIONS 1 ---

// VIEWPORT ANIMATIONS 2

function toggleAnimationN2() {
    var targetSection = document.getElementById("mainID2");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    } 
}

window.addEventListener("scroll", toggleAnimationN2);
window.addEventListener("resize", toggleAnimationN2);

toggleAnimationN2();

// VIEWPORT ANIMATIONS 2 ---

// VIEWPORT ANIMATIONS 3

function toggleAnimationN3() {
    var targetSection = document.getElementById("mainID3");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    } 
}

window.addEventListener("scroll", toggleAnimationN3);
window.addEventListener("resize", toggleAnimationN3);

toggleAnimationN3();

// VIEWPORT ANIMATIONS 3 ---

// VIEWPORT ANIMATIONS 4

function toggleAnimationN4() {
    var targetSection = document.getElementById("mainID4");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    } 
}

window.addEventListener("scroll", toggleAnimationN4);
window.addEventListener("resize", toggleAnimationN4);

toggleAnimationN4();

// VIEWPORT ANIMATIONS 4 ---

// VIEWPORT ANIMATIONS 5

function toggleAnimationN5() {
    var targetSection = document.getElementById("mainID5");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    } 
}

window.addEventListener("scroll", toggleAnimationN5);
window.addEventListener("resize", toggleAnimationN5);

toggleAnimationN5();

// VIEWPORT ANIMATIONS 5 ---


// RESET VIEWPORT ANIMATIONS

const mainID1 = document.getElementById('mainID1');
const mainID2 = document.getElementById('mainID2');
const mainID3 = document.getElementById('mainID3');
const mainID4 = document.getElementById('mainID4');
const mainID5 = document.getElementById('mainID5');
    
function scrollValue3() {
    var scroll = window.scrollY;
    if (scroll < 10) {
        mainID1.classList.remove('animationN1');
        mainID2.classList.remove('animationN1');
        mainID3.classList.remove('animationN1');
        mainID4.classList.remove('animationN1');
        mainID5.classList.remove('animationN1');
    } 
}

window.addEventListener('scroll', scrollValue3);

// RESET VIEWPORT ANIMATIONS ---
