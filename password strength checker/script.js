// script.js

const password = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");

const lengthReq = document.getElementById("length");
const uppercaseReq = document.getElementById("uppercase");
const numberReq = document.getElementById("number");
const specialReq = document.getElementById("special");

password.addEventListener("input", checkStrength);

togglePassword.addEventListener("change", function(){

    if(togglePassword.checked){
        password.type = "text";
    }
    else{
        password.type = "password";
    }

});

function checkStrength(){

    const value = password.value;

    let strength = 0;

    // LENGTH
    if(value.length >= 8){
        strength += 25;
        lengthReq.innerHTML = "✅ Minimum 8 Characters";
        lengthReq.style.color = "#00ff88";
    }
    else{
        lengthReq.innerHTML = "❌ Minimum 8 Characters";
        lengthReq.style.color = "white";
    }

    // UPPERCASE
    if(value.match(/[A-Z]/)){
        strength += 25;
        uppercaseReq.innerHTML = "✅ One Uppercase Letter";
        uppercaseReq.style.color = "#00ff88";
    }
    else{
        uppercaseReq.innerHTML = "❌ One Uppercase Letter";
        uppercaseReq.style.color = "white";
    }

    // NUMBER
    if(value.match(/[0-9]/)){
        strength += 25;
        numberReq.innerHTML = "✅ One Number";
        numberReq.style.color = "#00ff88";
    }
    else{
        numberReq.innerHTML = "❌ One Number";
        numberReq.style.color = "white";
    }

    // SPECIAL CHARACTER
    if(value.match(/[^A-Za-z0-9]/)){
        strength += 25;
        specialReq.innerHTML = "✅ One Special Character";
        specialReq.style.color = "#00ff88";
    }
    else{
        specialReq.innerHTML = "❌ One Special Character";
        specialReq.style.color = "white";
    }

    strengthBar.style.width = strength + "%";

    // PASSWORD STRENGTH
    if(strength <= 25){
        strengthBar.style.background = "#ff004c";
        message.innerHTML = "Weak Password";
    }
    else if(strength <= 50){
        strengthBar.style.background = "#ff9900";
        message.innerHTML = "Medium Password";
    }
    else if(strength <= 75){
        strengthBar.style.background = "#00ccff";
        message.innerHTML = "Strong Password";
    }
    else{
        strengthBar.style.background = "#00ff88";
        message.innerHTML = "Very Strong Password";
    }

    // RESET
    if(value.length === 0){
        strengthBar.style.width = "0%";
        message.innerHTML = "Password Strength";
    }
}
