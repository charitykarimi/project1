const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

togglePassword.addEventListener("click", () => {

    if(password.type === "password"){
        password.type = "text";
        togglePassword.textContent = "🙈";
    }else{
        password.type = "password";
        togglePassword.textContent = "👁️";
    }

});

form.addEventListener("submit", (e) => {

    e.preventDefault();

    document.querySelectorAll("small")
    .forEach(error => error.textContent = "");

    message.textContent = "";

    let valid = true;

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() === ""){
        email.nextElementSibling.textContent =
        "Email is required";
        valid = false;
    }
    else if(!emailPattern.test(email.value)){
        email.nextElementSibling.textContent =
        "Invalid email address";
        valid = false;
    }

    if(password.value.length < 8){
        document.querySelectorAll("small")[1]
        .textContent =
        "Password must be at least 8 characters";
        valid = false;
    }

    if(valid){
        message.textContent =
        "✅ Login Successful";
        form.reset();
    }

});