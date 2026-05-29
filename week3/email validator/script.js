// script.js

function validateEmail(){

    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        message.innerHTML = "Please enter an email";
        message.style.color = "#ff4d6d";
    }
    else if(pattern.test(email)){
        message.innerHTML = "Valid Email Address";
        message.style.color = "#00ff88";
    }
    else{
        message.innerHTML = "Invalid Email Address";
        message.style.color = "#ff004c";
    }
}