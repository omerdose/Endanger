
//////////////The count up function for mammal page slow count
$(document).ready(function() {
var countOptions= {
	useEasin:true,
	separator: ' '
}


var count1=new CountUp('mammalNums1',0,100,0,3,countOptions)
    var count2 = new CountUp('mammalNums2', 0, 11, 0, 3, countOptions)
    var count3 = new CountUp('mammalNums3', 0, 18, 0, 3, countOptions)
    count1.start();
    count2.start();
    count3.start();
});


//////////////////////////Menu Opening and Closing
// menu click on mammal
function show_hidea() {
    if ($('.activeMenua').css('display') === 'block') { }
    else {
        if ($('#contenta').css('display') === 'block') {
            document.getElementById("contenta").style.display = "none";
        }
        else {
            document.getElementById("contenta").style.display = "block";

            if ($('.activeMenub').css('display') === 'block') { }
            else {
                document.getElementById("contentb").style.display = "none";
            }
            if ($('.activeMenuc').css('display') === 'block') { }
            else {
                document.getElementById("contentc").style.display = "none";
            }

        }
    }
}


// menu click on living area
function show_hideb() {
    if ($('.activeMenub').css('display') === 'block') { }
    else {
        if ($('#contentb').css('display') === 'block') {
            document.getElementById("contentb").style.display = "none";

        }
        else {
            document.getElementById("contentb").style.display = "block";

            if ($('.activeMenua').css('display') === 'block') { }
            else {
                document.getElementById("contenta").style.display = "none";
            }
            if ($('.activeMenuc').css('display') === 'block') { }
            else {
                document.getElementById("contentc").style.display = "none";
            }

        }
    }
}
// menu click on volenteering and media page
function show_hidec() {
    if ($('.activeMenuc').css('display') === 'block') { }
    else {
        if ($('#contentc').css('display') === 'block') {
            document.getElementById("contentc").style.display = "none";

        }
        else {
            document.getElementById("contentc").style.display = "block";

            if ($('.activeMenua').css('display') === 'block') { }
            else {
                document.getElementById("contenta").style.display = "none";
            }
            if ($('.activeMenub').css('display') === 'block') { }
            else {
                document.getElementById("contentb").style.display = "none";
            }

        }
    }
}




//////////////////////////Volenteering page pics
function animalHospital(element) {
//////variabels names from first letters
//click on the Animal hospital for wild animals
    var hc = element.parentElement.querySelector(".hospitalClick");    
    var mc = element.parentElement.querySelector(".ministryClick");
	var mni = element.parentElement.querySelector(".ministryNatureImg");
	var ahi = element.parentElement.querySelector(".animalHospitalImg");
    if (hc.style.display == "") {
        hc.style.display = "block";
		if(mc.style.display=="block"){
        mc.style.display = "";
		mni.classList.toggle('selectedVolenteeringPlace');
		}
    } else {
        hc.style.display = "";
    }
    ahi.classList.toggle('selectedVolenteeringPlace');
}
//click on ministry of nature
function ministryNature(element) {
    var mc = element.parentElement.querySelector(".ministryClick");
    var hc = element.parentElement.querySelector(".hospitalClick");
	var ahi = element.parentElement.querySelector(".animalHospitalImg");
	var mni = element.parentElement.querySelector(".ministryNatureImg");
    if (mc.style.display == "") {
        mc.style.display = "block";
		if(hc.style.display=="block"){
        hc.style.display = "";
		ahi.classList.toggle('selectedVolenteeringPlace');
		}
    } else {
        mc.style.display = "";
    }
    mni.classList.toggle('selectedVolenteeringPlace');

}

/////////////////////////////Carousel for HomePage
var slideIndex = 1;
showSlides(slideIndex);

//next and previus Click
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Click on one of the dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//funtion that checks where and what to move in the dots and slides department
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/////////////////////////////////Mammal page
//open mammal List
function openNavMammal() {
  document.getElementById("mammalList").style.width = "100%";
}

function closeNavMammal() {
  document.getElementById("mammalList").style.width = "0%";
}
////////////////////////////Carousels for mammalPage 1
var slideIndexEx = 1;
showSlidesEx(slideIndexEx);

//next and previus Click

function plusSlidesEx(n) {
    showSlidesEx(slideIndexEx += n);
}

//click on the dots
function currentSlideEx(n) {
    showSlidesEx(slideIndexEx = n);
}
//funtion that checks where and what to move in the dots and slides department
function showSlidesEx(n) {
    var i;
    var slidesEx = document.getElementsByClassName("carouselMammalEx");
    var dotsEx = document.getElementsByClassName("dotEx");
    if (n > slidesEx.length) { slideIndexEx = 1 }
    if (n < 1) { slideIndexEx = slidesEx.length }
    for (i = 0; i < slidesEx.length; i++) {
        slidesEx[i].style.display = "none";
    }
    for (i = 0; i < dotsEx.length; i++) {
        dotsEx[i].className = dotsEx[i].className.replace("activeEx", "");
    }
    slidesEx[slideIndexEx - 1].style.display = "block";
    dotsEx[slideIndexEx - 1].className += " activeEx";
}

///////Carousels for mammalPage 2
var slideIndexEn = 1;
showSlidesEn(slideIndexEn);

//next and previus Click
function plusSlidesEn(n) {
    showSlidesEn(slideIndexEn += n);
}

//click on the dots
function currentSlideEn(n) {
    showSlidesEn(slideIndexEn = n);
}
//funtion that checks where and what to move in the dots and slides department
function showSlidesEn(n) {
    var i;
    var slidesEn = document.getElementsByClassName("carouselMammalEn");
    var dotsEn = document.getElementsByClassName("dotEn");
    if (n > slidesEn.length) { slideIndexEn = 1 }
    if (n < 1) { slideIndexEn = slidesEn.length }
    for (i = 0; i < slidesEn.length; i++) {
        slidesEn[i].style.display = "none";
    }
    for (i = 0; i < dotsEn.length; i++) {
        dotsEn[i].className = dotsEn[i].className.replace(" activeEn", "");
    }
    slidesEn[slideIndexEn - 1].style.display = "block";
    dotsEn[slideIndexEn - 1].className += " activeEn";
}
//////////////////////South page
function openNavSouth() {
  document.getElementById("southList").style.width = "100%";
}

function closeNavSouth() {
  document.getElementById("southList").style.width = "0%";
}
////////////////////////////Carousels for South
//first Carousel south
var slideIndexExS = 1;
showSlidesExS(slideIndexExS);

//next and previus Click

function plusSlidesExS(n) {
    showSlidesExS(slideIndexExS += n);
}

//click on the dots
function currentSlideExS(n) {
    showSlidesExS(slideIndexExS = n);
}
//funtion that checks where and what to move in the dots and slides department
function showSlidesExS(n) {
    var i;
    var slidesExS = document.getElementsByClassName("carouselSouthEx");
    var dotsExS = document.getElementsByClassName("dotExS");
    if (n > slidesExS.length) { slideIndexExS = 1 }
    if (n < 1) { slideIndexExS = slidesExS.length }
    for (i = 0; i < slidesExS.length; i++) {
        slidesExS[i].style.display = "none";
    }
    for (i = 0; i < dotsExS.length; i++) {
        dotsExS[i].className = dotsExS[i].className.replace("activeExS", "");
    }
    slidesExS[slideIndexExS - 1].style.display = "block";
    dotsExS[slideIndexExS - 1].className += " activeExS";
}

///////Carousels for SouthPage 2
var slideIndexEnS = 1;
showSlidesEnS(slideIndexEnS);

//next and previus Click
function plusSlidesEnS(n) {
    showSlidesEnS(slideIndexEnS += n);
}

//click on the dots
function currentSlideEnS(n) {
    showSlidesEnS(slideIndexEnS = n);
}
//funtion that checks where and what to move in the dots and slides department
function showSlidesEnS(n) {
    var i;
    var slidesEnS = document.getElementsByClassName("carouselSouthEn");
    var dotsEnS = document.getElementsByClassName("dotEnS");
    if (n > slidesEnS.length) { slideIndexEnS = 1 }
    if (n < 1) { slideIndexEnS = slidesEnS.length }
    for (i = 0; i < slidesEnS.length; i++) {
        slidesEnS[i].style.display = "none";
    }
    for (i = 0; i < dotsEnS.length; i++) {
        dotsEnS[i].className = dotsEnS[i].className.replace(" activeEnS", "");
    }
    slidesEnS[slideIndexEnS - 1].style.display = "block";
    dotsEnS[slideIndexEnS - 1].className += " activeEnS";
}


////////////Carousels for lutraPage
var slideIndexLtr = 1;
showSlidesLtr(slideIndexLtr);

//next and previus Click
function plusSlidesLtr(n) {
    showSlidesLtr(slideIndexLtr += n);
}

//click on the dots
function currentSlideLtr(n) {
    showSlidesLtr(slideIndexLtr = n);
}
//funtion that checks where and what to move in the dots and slides department
function showSlidesLtr(n) {
    var i;
    var slidesLtr = document.getElementsByClassName("carouselLtr");
    var dotsLtr = document.getElementsByClassName("dotLtr");
    if (n > slidesLtr.length) { slideIndexLtr = 1 }
    if (n < 1) { slideIndexLtr = slidesLtr.length }
    for (i = 0; i < slidesLtr.length; i++) {
        slidesLtr[i].style.display = "none";
    }
    for (i = 0; i < dotsLtr.length; i++) {
        dotsLtr[i].className = dotsLtr[i].className.replace(" activeLtr", "");
    }
    slidesLtr[slideIndexLtr - 1].style.display = "block";
    dotsLtr[slideIndexLtr - 1].className += " activeLtr";
}




