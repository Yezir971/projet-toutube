"use strict";

document.addEventListener('DOMContentLoaded', ()=>{
    AOS.init();
    // js du menuHamburger 
        // variable page menu hamburger 
   
    let btnMenu = document.querySelector('.menuHamburger');
    let menu = document.getElementById('menu');
    let croix1 = document.getElementById('barre1');
    let croix2 = document.getElementById('barre2');
    let listeMenu = document.querySelectorAll('.listeMenu')

    // constante qui va nous permettre de modifier notre css de facon dynamique pour gérer l'ajout d'élément dans notre portfolio 

    btnMenu.onclick = function(){/*on récupère les éléments enfants du conteneur hamburger pour réaliser l'animations en css grâce à l'id croix*/
        menu.classList.toggle('hide');
        croix1.classList.toggle('croix');
        croix2.classList.toggle('croix');
        croix1.classList.toggle('angleBarre1');
        croix2.classList.toggle('angleBarre2');
    }
    for(let i=0; i<listeMenu.length ; i++){
        listeMenu[i].addEventListener('click', ()=>{
            menu.classList.toggle('hide');
            croix1.classList.toggle('croix');
            croix2.classList.toggle('croix');
            croix1.classList.toggle('angleBarre1');
            croix2.classList.toggle('angleBarre2');
    
    
        })
    }




    // fin du js menuHamburger

    // crousel importer de codepen créer par Yulia Verbylo, Slider with scaling in the center
    
    const track = document.querySelector(".carousel__track"); //ul
    const slides = Array.from(track.children); //li items
    const nextButton = document.querySelector(".carousel__button--right ");
    const prevButton = document.querySelector(".carousel__button--left");
    const dotsNav = document.querySelector(".carousel__nav");
    const dots = Array.from(dotsNav.children);
    
    const slideWidth = slides[0].getBoundingClientRect().width;
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + "px";
    };
    slides.forEach(setSlidePosition);
    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = "translateX(-" + targetSlide.style.left + ")";
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
    };
    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
      if (targetIndex === 0) {
        prevButton.classList.add("is-hidden");
        nextButton.classList.remove("is-hidden");
      } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.add("is-hidden");
      } else {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.remove("is-hidden");
      }
    };
    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove("current-slide");
      targetDot.classList.add("current-slide");
    };
    
    nextButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;
      const currentDot = dotsNav.querySelector(".current-slide");
      const nextDot = currentDot.nextElementSibling;
      const nextIndex = slides.findIndex((slide) => slide === nextSlide);
      moveToSlide(track, currentSlide, nextSlide);
      updateDots(currentDot, nextDot);
      hideShowArrows(slides, prevButton, nextButton, nextIndex);
    });
    
    prevButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const prevSlide = currentSlide.previousElementSibling;
      const currentDot = dotsNav.querySelector(".current-slide");
      const prevDot = currentDot.previousElementSibling;
      const prevIndex = slides.findIndex((slide) => slide === prevSlide);
      moveToSlide(track, currentSlide, prevSlide);
      updateDots(currentDot, prevDot);
      hideShowArrows(slides, prevButton, nextButton, prevIndex);
    });
    
    dotsNav.addEventListener("click", (e) => {
      const targetDot = e.target.closest("button");
      if (!targetDot) return;
      const currentSlide = track.querySelector(".current-slide");
      const currentDot = dotsNav.querySelector(".current-slide");
      const targetIndex = dots.findIndex((dot) => dot === targetDot);
      const targetSlide = slides[targetIndex];
      moveToSlide(track, currentSlide, targetSlide);
      updateDots(currentDot, targetDot);
      hideShowArrows(slides, prevButton, nextButton, targetIndex);
    });

    // button switch Nour 
    var swit = document.getElementById('lightSwitch');
    var container = document.getElementById('container');
    swit.onclick = function(){
        var color = container.style.backgroundColor;
        if(color === 'var(--colorButton2)'){
            container.style.backgroundColor = 'var(--backgroundColor)';
        }else{
            container.style.backgroundColor = 'var(--colorButton2)';
        }
    };



})