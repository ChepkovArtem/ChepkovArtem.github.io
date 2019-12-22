
//Гамбургер мобилки и планшетки//

const hamburger = document.querySelector(".nav__fullmenu");
const fullScreenMenu = document.querySelector(".fullscreen-menu");
const closeMenu = document.querySelector(".fullscreen-menu__close");
const menuLink = document.querySelectorAll(".fullscreen-menu__link");

hamburger.addEventListener('click', function(){
  fullScreenMenu.style.display = 'flex';
})
closeMenu.addEventListener('click',function(){
  fullScreenMenu.style.display = 'none';
})

fullScreenMenu.addEventListener('click',function(event){
  console.log(event);
  if(event.target===fullScreenMenu){
    fullScreenMenu.style.display = 'none';
  }
})

for(let i=0; i<menuLink.length; i++) {
  menuLink[i].addEventListener('click', function(){
    fullScreenMenu.style.display = 'none';
  })
}

//Аккордеон команда//

var openMenuTeam = document.querySelectorAll('.team__person');
var activeMenuTeam;

openMenuTeam.forEach(function(item){
  item.addEventListener('click', function(e){
    this.classList.add('team__person--active');
    if(activeMenuTeam){activeMenuTeam.classList.remove('team__person--active')}
    activeMenuTeam = (activeMenuTeam === this) ? 0 : this;
  })
})

//Аккордеон меню//

var openMenu = document.querySelectorAll('.menu-accordeon__triger');
var activeMenu;

openMenu.forEach(function(item){
  item.addEventListener('click', function(e){
    this.classList.add('menu-accordeon__triger--active');
    if(activeMenu){activeMenu.classList.remove('menu-accordeon__triger--active')}
    activeMenu = (activeMenu === this) ? 0 : this;
  })
})
