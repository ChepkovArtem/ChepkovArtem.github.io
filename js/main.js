const hamburger = document.querySelector(".nav__fullmenu");
const fullScreenMenu = document.querySelector(".fullscreen-menu");
const closeMenu = document.querySelector(".fullscreen-menu__close");

hamburger.addEventListener('click', function(){
  fullScreenMenu.style.display = 'flex';
})
closeMenu.addEventListener('click',function(){
  fullScreenMenu.style.display = 'none';
})