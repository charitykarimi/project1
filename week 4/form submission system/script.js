const form = document.getElementById("contactForm");
const loader = document.getElementById("loader");
const result = document.getElementById("result");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === "" || email === "" || message === ""){
        result.innerHTML = "⚠ Please fill all fields";
        result.style.color = "orange";
        return;
    }

    if(!emailPattern.test(email)){
        result.innerHTML = "❌ Invalid Email";
        result.style.color = "red";
        return;
    }

    loader.style.display = "block";
    result.innerHTML = "";

    setTimeout(() => {

        loader.style.display = "none";

        result.innerHTML =
        `✅ Form Submitted Successfully`;

        result.style.color = "green";

        form.reset();

    }, 2000);

});