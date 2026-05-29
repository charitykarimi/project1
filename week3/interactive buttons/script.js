// script.js

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousemove", function(e){

        const x = e.offsetX;
        const y = e.offsetY;

        button.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(0,255,255,0.4),
        rgba(255,255,255,0.05))
        `;

    });

    button.addEventListener("mouseleave", function(){

        button.style.background = "rgba(255,255,255,0.08)";

    });

});