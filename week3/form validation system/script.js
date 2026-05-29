// script.js

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function(e){

    e.preventDefault();

    validateInputs();
});

function validateInputs(){

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    // USERNAME
    if(usernameValue === ""){
        setError(username, "Username is required");
    }else{
        setSuccess(username);
    }

    // EMAIL
    if(emailValue === ""){
        setError(email, "Email is required");
    }else if(!validateEmail(emailValue)){
        setError(email, "Enter a valid email");
    }else{
        setSuccess(email);
    }

    // PASSWORD
    if(passwordValue === ""){
        setError(password, "Password is required");
    }else if(passwordValue.length < 6){
        setError(password, "Minimum 6 characters");
    }else{
        setSuccess(password);
    }

    // CONFIRM PASSWORD
    if(confirmPasswordValue === ""){
        setError(confirmPassword, "Confirm your password");
    }else if(confirmPasswordValue !== passwordValue){
        setError(confirmPassword, "Passwords do not match");
    }else{
        setSuccess(confirmPassword);
    }
}

function setError(input, message){

    const inputBox = input.parentElement;
    const small = inputBox.querySelector("small");

    small.innerText = message;

    inputBox.classList.add("error");
    inputBox.classList.remove("success");
}

function setSuccess(input){

    const inputBox = input.parentElement;

    inputBox.classList.add("success");
    inputBox.classList.remove("error");
}

function validateEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}