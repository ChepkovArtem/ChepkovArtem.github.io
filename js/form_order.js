const myForm = document.querySelector('#form-order');
const sendButton = document.querySelector('#make-order');

sendButton.addEventListener('click', function(event){
    event.preventDefault();
    console.log(myForm.elements.name.value);
    console.log(myForm.elements.name.value);
})