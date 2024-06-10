// LOAD ANIMATIONS

$(function(){
    setTimeout(function(){
        $("#navigationID").addClass("navigationIDAnimation");
    }, 350);
});

$(function(){
    setTimeout(function(){
        $("#headerID").addClass("headerIDAnimation");
    }, 500);
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

function delayedToggleAnimationN2() {
    setTimeout(toggleAnimationN2, 200); 
}

window.addEventListener("scroll", delayedToggleAnimationN2);
window.addEventListener("resize", delayedToggleAnimationN2);

delayedToggleAnimationN2(); 

// VIEWPORT ANIMATIONS 2 ---

// VIEWPORT ANIMATIONS 3

function toggleAnimationN3() {
    var targetSection = document.getElementById("mainID3");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    } 
}

function delayedToggleAnimationN3() {
    setTimeout(toggleAnimationN3, 250); 
}

window.addEventListener("scroll", delayedToggleAnimationN3);
window.addEventListener("resize", delayedToggleAnimationN3);

delayedToggleAnimationN3(); 

// VIEWPORT ANIMATIONS 3 ---

// VIEWPORT ANIMATIONS 4

function toggleAnimationN4() {
    var targetSection = document.getElementById("mainID4");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    } 
}

function delayedToggleAnimationN4() {
    setTimeout(toggleAnimationN4, 300); 
}

window.addEventListener("scroll", delayedToggleAnimationN4);
window.addEventListener("resize", delayedToggleAnimationN4);

delayedToggleAnimationN4(); 

// VIEWPORT ANIMATIONS 4 ---

// VIEWPORT ANIMATIONS 5

function toggleAnimationN5() {
    var targetSection = document.getElementById("mainID5");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    } 
}

function delayedToggleAnimationN5() {
    setTimeout(toggleAnimationN5, 350);
}

window.addEventListener("scroll", delayedToggleAnimationN5);
window.addEventListener("resize", delayedToggleAnimationN5);

delayedToggleAnimationN5(); 

// VIEWPORT ANIMATIONS 5 ---


// VIEWPORT ANIMATIONS 6

function toggleAnimationN6() {
    var targetSection = document.getElementById("articleID1");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    } 
}

function delayedToggleAnimationN6() {
    setTimeout(toggleAnimationN6, 200);
}

window.addEventListener("scroll", delayedToggleAnimationN6);
window.addEventListener("resize", delayedToggleAnimationN6);

delayedToggleAnimationN6(); 

// VIEWPORT ANIMATIONS 6 ---


// VIEWPORT ANIMATIONS 7

function toggleAnimationN7() {
    var targetSection = document.getElementById("articleID2");
    var articleID2attach = document.getElementById('articleID2attach');
    if (isElementInViewport(targetSection)) {
        articleID2attach.classList.add('animationN1');
    } 
}

function delayedToggleAnimationN7() {
    setTimeout(toggleAnimationN7, 700);
}

window.addEventListener("scroll", delayedToggleAnimationN7);
window.addEventListener("resize", delayedToggleAnimationN7);

delayedToggleAnimationN7(); 

// VIEWPORT ANIMATIONS 7 ---


// VIEWPORT ANIMATIONS 8

function toggleAnimationN8() {
    var targetSection = document.getElementById("articleID3");
    var articleID3attach = document.getElementById('articleID3attach');
    if (isElementInViewport(targetSection)) {
        articleID3attach.classList.add('animationN1');
    } 
}

function delayedToggleAnimationN8() {
    setTimeout(toggleAnimationN8, 800);
}

window.addEventListener("scroll", delayedToggleAnimationN8);
window.addEventListener("resize", delayedToggleAnimationN8);

delayedToggleAnimationN8(); 

// VIEWPORT ANIMATIONS 8 ---

// VIEWPORT ANIMATIONS 9

function toggleAnimationN9() {
    var targetSection = document.getElementById("articleID4");
    var articleID4attach = document.getElementById('articleID4attach');
    if (isElementInViewport(targetSection)) {
        articleID4attach.classList.add('animationN1');
    } 
}

function delayedToggleAnimationN9() {
    setTimeout(toggleAnimationN9, 900);
}

window.addEventListener("scroll", delayedToggleAnimationN9);
window.addEventListener("resize", delayedToggleAnimationN9);

delayedToggleAnimationN9(); 

// VIEWPORT ANIMATIONS 9 ---

// VIEWPORT ANIMATIONS 10

function toggleAnimationN10() {
    var targetSection = document.getElementById("articleID5");
    var articleID5attach = document.getElementById('articleID5attach');
    if (isElementInViewport(targetSection)) {
        articleID5attach.classList.add('animationN1');
    } 
}

function delayedToggleAnimationN10() {
    setTimeout(toggleAnimationN10, 1000);
}

window.addEventListener("scroll", delayedToggleAnimationN10);
window.addEventListener("resize", delayedToggleAnimationN10);

delayedToggleAnimationN10(); 

// VIEWPORT ANIMATIONS 10 ---




// RESET VIEWPORT ANIMATIONS

const mainID1 = document.getElementById('mainID1');
const mainID2 = document.getElementById('mainID2');
const mainID3 = document.getElementById('mainID3');
const mainID4 = document.getElementById('mainID4');
const mainID5 = document.getElementById('mainID5');

const articleID1 = document.getElementById('articleID1');
const articleID2attach = document.getElementById('articleID2attach');
const articleID3attach = document.getElementById('articleID3attach');
const articleID4attach = document.getElementById('articleID4attach');
const articleID5attach = document.getElementById('articleID5attach');
    
function scrollValue3() {
    var scroll = window.scrollY;
    if (scroll < 10) {
        mainID1.classList.remove('animationN1');
        mainID2.classList.remove('animationN1');
        mainID3.classList.remove('animationN1');
        mainID4.classList.remove('animationN1');
        mainID5.classList.remove('animationN1');

        articleID1.classList.remove('animationN1');
        articleID2attach.classList.remove('animationN1');
        articleID3attach.classList.remove('animationN1');
        articleID4attach.classList.remove('animationN1');
        articleID5attach.classList.remove('animationN1');
    } 
}

window.addEventListener('scroll', scrollValue3);

// RESET VIEWPORT ANIMATIONS ---
