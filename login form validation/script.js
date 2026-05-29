// script.js

const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const successPopup = document.getElementById("successPopup");

// SHOW PASSWORD

togglePassword.addEventListener("change", function(){

    if(togglePassword.checked){
        password.type = "text";
    }
    else{
        password.type = "password";
    }

});

// FORM SUBMIT

form.addEventListener("submit", function(e){

    e.preventDefault();

    validateInputs();

});

function validateInputs(){

    let valid = true;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // EMAIL

    if(emailValue === ""){
        setError(email,"Email is required");
        valid = false;
    }
    else if(!validateEmail(emailValue)){
        setError(email,"Invalid email address");
        valid = false;
    }
    else{
        setSuccess(email);
    }

    // PASSWORD

    if(passwordValue === ""){
        setError(password,"Password is required");
        valid = false;
    }
    else if(passwordValue.length < 6){
        setError(password,"Minimum 6 characters");
        valid = false;
    }
    else{
        setSuccess(password);
    }

    // SUCCESS

    if(valid){

        successPopup.classList.add("active");

        form.reset();

        document.querySelectorAll(".input-box").forEach(box => {
            box.classList.remove("success");
        });

    }

}

function setError(input,message){

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