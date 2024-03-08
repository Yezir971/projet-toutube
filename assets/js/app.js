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

    const img = document.getElementById('carousel');
    const rightBtn = document.getElementById('right-btn');
    const leftBtn = document.getElementById('left-btn');
    const imageSrc = 'assets/img/image-projet-youtube/';
    
    // Images are from unsplash
    let pictures = [imageSrc+"img3.jpg" ,imageSrc+"imgRemake3.png",imageSrc+"imgProjet1.jpg" ];
    
    img.src = pictures[0];
    let position = 0;
    
    function moveRight(){
      if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
      }
      img.src = pictures[position + 1];
      position++;
    }
    
    function moveLeft(){
      if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
      }
      img.src = pictures[position - 1];
      position--;
    }
    
    rightBtn.addEventListener("click", moveRight);
    leftBtn.addEventListener("click", moveLeft);

    // button switch Nour 
    // var swit = document.getElementById('lightSwitch');
    // var container = document.getElementById('container');
    // swit.onclick = function(){
    //     console.log('hello');
    //     var color = container.style.backgroundColor;
    //     if(color === 'var(--colorButton2)'){
    //         container.style.backgroundColor = 'var(--backgroundColor)';
    //     }else{
    //         container.style.backgroundColor = 'var(--colorButton2)';
    //     }
    // };
    // fin du buton switch de Nour 



})