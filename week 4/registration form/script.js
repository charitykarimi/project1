                                                                                                                                                                                    // script.js

const password = document.getElementById("password");
const bar = document.querySelector(".bar");

password.addEventListener("input", () => {

  const value = password.value.length;

  if(value <= 4){
    bar.style.width = "25%";
  }
  else if(value <= 7){
    bar.style.width = "50%";
  }
  else if(value <= 10){
    bar.style.width = "75%";
  }
  else{
    bar.style.width = "100%";
  }

});

const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if(pass !== confirm){
    alert("Passwords do not match!");
    return;
  }

  alert("Registration Successful 🚀");

});