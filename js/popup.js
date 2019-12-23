const openPopup = document.querySelectorAll('.js-feedback-modal');
const popup = document.querySelector('.overlay');
const closePopup = popup.querySelector('.js-close');
const popupTitle = popup.querySelector('.overlay__title');
const popupText = popup.querySelector('.overlay__text');

function commentsPopup(){
  for(let i=0; i<openPopup.length; i++){
    openPopup[i].addEventListener('click', function(){
      popup.classList.add('popup');

      let thisParent = this.parentNode;
      let name = thisParent.querySelector('.reviews__author').innerText;
      let content = thisParent.querySelector('.reviews__text').innerText;
      console.log(name);
      console.log(content);
      popupTitle.innerText = name;
      popupText.innerText = content;

    })
  }
  closePopup.addEventListener('click', function(){
    popup.classList.remove('popup');
  })
  
  popup.addEventListener('click', function(e){
    if(e.target.classList.contains('popup')){
      closePopup.click();
    }
  })

}
commentsPopup();