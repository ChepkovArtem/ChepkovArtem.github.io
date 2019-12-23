const myForm = document.querySelector('#form-order');
const sendButton = document.querySelector('#make-order');

sendButton.addEventListener('click', function(event){
    event.preventDefault();
    if (validateForm(myForm)){
        const data ={
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            comment: myForm.elements.comment.value
        };

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', ()=>{
            console.log(xhr.response);
        });
    }
});

function validateForm(form){
    let valid = true;

    if(!validateField(form.elements.name)){
        valid = false;
    }
    if(!validateField(form.elements.phone)){
        valid = false;
    }
    if(!validateField(form.elements.comment)){
        valid = false;
    }
    return valid;
}

function validateField(field){
    if(!field.checkValidity()){
        field.nextElementSibling.textContent = field.validationMessage;
        return false;
    }
    else{
        field.nextElementSibling.textContent = '';
        console.log('ок!');
        return field.checkValidity();
    }
}