// script.js

const form = document.getElementById("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
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
        setError(nameInput,"Name is required");
        valid = false;
    }else{
        setSuccess(nameInput);
    }

    // EMAIL
    if(emailInput.value.trim() === ""){
        setError(emailInput,"Email is required");
        valid = false;
    }
    else if(!validateEmail(emailInput.value)){
        setError(emailInput,"Invalid email");
        valid = false;
    }
    else{
        setSuccess(emailInput);
    }

    // MESSAGE
    if(messageInput.value.trim() === ""){
        setError(messageInput,"Message is required");
        valid = false;
    }else{
        setSuccess(messageInput);
    }

    // SUCCESS
    if(valid){

        document.getElementById("btnText").innerHTML = "Processing...";

        setTimeout(() => {

            successBox.classList.add("active");

            form.reset();

            document.querySelectorAll(".input-box").forEach(box=>{
                box.classList.remove("success");
            });

            document.getElementById("btnText").innerHTML = "Send Message";

        },1500);

    }

}

function setError(input,message){

    const inputBox = input.parentElement;
    const small = inputBox.querySelector("small");

    small.innerHTML = message;

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