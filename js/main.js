// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// MENU SHOW
// Validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

// MENU HIDDEN
// Validate if constant exists

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const moreBtnOne = document.getElementById('m01');
const moreBtnTwo = document.getElementById('m02'); 
const moreBtnThree = document.getElementById('m03');
const moreBtnFour = document.getElementById('m04');
const moreBtnFive = document.getElementById('m05');
const moreBtnSix = document.getElementById('m06');
const moreBtnSeven = document.getElementById('m07');
const moreBtnEight = document.getElementById('m08');
const moreBtnNine = document.getElementById('m09');
const moreBtnTen = document.getElementById('m10');

moreBtnOne.addEventListener("click", ()=>{
    window.open("metodo01.html");
})

moreBtnTwo.addEventListener("click", ()=>{
    window.open("metodo02.html");
})

moreBtnThree.addEventListener("click", ()=>{
    window.open("metodo03.html");
})

moreBtnFour.addEventListener("click", ()=>{
    window.open("metodo04.html");
})

moreBtnFive.addEventListener("click", ()=>{
    window.open("metodo05.html");
})

moreBtnSix.addEventListener("click", ()=>{
    window.open("metodo06.html");
})

moreBtnSeven.addEventListener("click", ()=>{
    window.open("metodo07.html");
})

moreBtnEight.addEventListener("click", ()=>{
    window.open("metodo08.html");
})

moreBtnNine.addEventListener("click", ()=>{
    window.open("metodo09.html");
})

moreBtnTen.addEventListener("click", ()=>{
    window.open("metodo10.html");
})

// SCROLL REVEAL ANIMATION  
const sr = ScrollReveal({
    distance:'60px',
    duration:2800,
    // reset: true,
})

sr.reveal('.home-title, .home-card, .metodo-title, .metodo_card, .direitos-title, .direitos-subtitle, .card-content, .ajuda-title, .ajuda-box, .footer',{
    origin:'top',
    interval: 100,
})

sr.reveal('.dir-box1',{
    origin:'left',
})


sr.reveal('.dir-box2',{
    origin:'right',
    interval: 100,
})