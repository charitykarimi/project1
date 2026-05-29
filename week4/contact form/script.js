// script.js

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const successBox = document.getElementById("successBox");

form.addEventListener("submit", function(e){

    e.preventDefault();

    validateForm();

});

function validateForm(){

    let valid = true;

    // NAME

    if(nameInput.value.trim() === ""){
        setError(nameInput,"Full name is required");
        valid = false;
    }
    else{
        setSuccess(nameInput);
    }

    // EMAIL

    if(emailInput.value.trim() === ""){
        setError(emailInput,"Email is required");
        valid = false;
    }
    else if(!validateEmail(emailInput.value)){
        setError(emailInput,"Invalid email address");
        valid = false;
    }
    else{
        setSuccess(emailInput);
    }

    // SUBJECT

    if(subjectInput.value.trim() === ""){
        setError(subjectInput,"Subject is required");
        valid = false;
    }
    else{
        setSuccess(subjectInput);
    }

    // MESSAGE

    if(messageInput.value.trim() === ""){
        setError(messageInput,"Message cannot be empty");
        valid = false;
    }
    else{
        setSuccess(messageInput);
    }

    // SUCCESS

    if(valid){

        successBox.classList.add("active");

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