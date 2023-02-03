const from = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input) {
    input.className = 'form-control is invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className ='invalid-feedback';
}
function succes(input) {
    input.className = 'form-control is-valid';
}
function checkEmail(email) {
    const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if(re.test(input.value)) {
        succes(input);
    } else {
        error(input,  'hatalı bir mail adresi');
    }
}
function checkRequired(input, min, max) {
    if(input.value.length < min) {
    error(input, `${input.id} en az ${min} karakter olamalı`);
    } else if (input.value.length > max) {
    error(input, `${input.id} en fazla ${max} karakter olamalı`);
    } else {
    succes(input);
    }
function checkPhone(input) {
    var exp = /^\d{10}$/;
    if(!exp.test(input.value))
    error(input, 'Telefon 10 karakterli olmalıdır.');
}
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username,email,password,repassword]);
    checkEmail(email);
    checkLength(username,7,15);
    checkLength(password,7,12);
    checkPasswords(password,repassword);
    checkPhone(phone);
});




























    if(username.value === ''){
        error(username, 'Kullanıcı gerekeli!');
   }else {
       succes(username);
    }
    if(email.value === ''){
        error(email, 'Email gerekli!');
    } else if (!validateEmail(email.value)) {
        error(email, 'düzgün bir mail adresi giriniz');
    }
    else {
        succes(email);
    }
    if(repassword.value === '') {
        error(password, 'Şifre gerekli!');
    } else {
        succes(repassword);
    } 
}