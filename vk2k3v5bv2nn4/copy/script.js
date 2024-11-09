const emailField = document.querySelector('.email');
const emailInput = emailField.querySelector('input');
const emailErrorText = emailField.querySelector('.error-txt');
const passwordField = document.querySelector('.password');
const passwordInput = passwordField.querySelector('input');
const form = document.querySelector('form');

let triedLoginOnce = false;

form.onsubmit = (e) => {
    triedLoginOnce = true;

    // Prevent form from submitting
    e.preventDefault();

    // show warnings
    const email = emailInput.value;
    if (!isValidEmail(email)) {
        emailField.classList.add("shake", "error");
        emailErrorText.innerText = "Enter a valid email address";
    }
    if (email == "") {
        emailField.classList.add("shake", "error");
        emailErrorText.innerText = "Email can't be blank";
    }

    if (passwordInput.value == "") {
        passwordField.classList.add("shake", "error");
    }
    
    setTimeout(() => {
        emailField.classList.remove("shake");
        passwordField.classList.remove("shake");
    }, 500);
};

passwordInput.oninput = () => {
    if (passwordInput.value == "") {
        passwordField.classList.add("error");
    } else {
        passwordField.classList.remove("error");
    }
};

emailInput.oninput = () => {
    const email = emailInput.value;

    if (email == "") {
        emailField.classList.add("error");
        emailErrorText.innerText = "Email can't be blank";
    } else if (triedLoginOnce && !isValidEmail(email)) {
        emailField.classList.add("error");
        emailErrorText.innerText = "Enter a valid email address";
    } else {
        emailField.classList.remove("error");
    }
};

const isValidEmail = (text) => {
    const emailRegex = /^[a-zA-Z0-9_-.]+@[a-zA-Z0-9_-.]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(text);
};