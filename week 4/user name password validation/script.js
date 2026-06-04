const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");
    let success = document.getElementById("success");

    userError.textContent = "";
    passError.textContent = "";
    success.textContent = "";

    let valid = true;

    // Username Validation
    if(username === ""){
        userError.textContent = "Username is required";
        valid = false;
    }else if(username.length < 4){
        userError.textContent = "Username must be at least 4 characters";
        valid = false;
    }

    // Password Validation
    if(password === ""){
        passError.textContent = "Password is required";
        valid = false;
    }else if(password.length < 8){
        passError.textContent = "Password must be at least 8 characters";
        valid = false;
    }

    if(valid){
        success.textContent = "Login Successful ✓";
    }
});