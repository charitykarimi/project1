// script.js

const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");
const characters = document.getElementById("characters");
const words = document.getElementById("words");

textInput.addEventListener("input", () => {

    const text = textInput.value;

    // LIVE PREVIEW
    preview.innerHTML = text.replace(/\n/g, "<br>");

    // CHARACTER COUNT
    characters.innerHTML = `${text.length} Characters`;

    // WORD COUNT
    const wordCount = text.trim() === "" 
        ? 0 
        : text.trim().split(/\s+/).length;

    words.innerHTML = `${wordCount} Words`;

    // GLOW EFFECT
    preview.classList.add("typing");

    setTimeout(() => {
        preview.classList.remove("typing");
    }, 300);

    // EMPTY STATE
    if(text.length === 0){
        preview.innerHTML = "Your live text will appear here...";
    }

});