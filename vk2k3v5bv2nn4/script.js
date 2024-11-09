const emailField = document.querySelector('.email');
const emailInput = emailField.querySelector('input');
const emailErrorText = emailField.querySelector('.error-txt');
const passwordField = document.querySelector('.password');
const passwordInput = passwordField.querySelector('input');
const form = document.querySelector('form');

let inputEmailAtLeastOnce = false;

const isValidEmail = (text) => {
    // const emailRegex = /^[^ ]+@[^ ]+\.[^ ]{2,3}$/;
    // return emailRegex.test(text);
    return text == "abc";
};

passwordInput.oninput = () => {
    if (passwordInput.value == "") {
        passwordField.classList.add("error");
    } else {
        passwordField.classList.remove("error");
    }
}

emailInput.oninput = () => {
    const email = emailInput.value;

    if (email == ""){
        emailField.classList.add("error");
        emailErrorText.innerText = "Email address can't be blank";
    } else if (inputEmailAtLeastOnce && !isValidEmail(email)) {
        emailField.classList.add("error");
        emailErrorText.innerText = "Enter a valid email address";
    } else {
        emailField.classList.remove("error");
    }
};

form.onsubmit = (e) => {
    e.preventDefault();
    inputEmailAtLeastOnce = true;

    if (passwordInput.value == "") {
        passwordField.classList.add("error");
    }
    
    const email = emailInput.value;

    if (email == ""){
        emailField.classList.add("error");
        emailErrorText.innerText = "Email address can't be blank";
    } else if (inputEmailAtLeastOnce && !isValidEmail(email)) {
        emailField.classList.add("error");
        emailErrorText.innerText = "Enter a valid email address";
    }
};