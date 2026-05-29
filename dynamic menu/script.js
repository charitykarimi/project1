function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}

// active link switching
const links = document.querySelectorAll("ul li a");

links.forEach(link=>{
  link.addEventListener("click",()=>{
    links.forEach(l=>l.classList.remove("active"));
    link.classList.add("active");

    // close menu on mobile after click
    document.getElementById("menu").classList.remove("show");
  });
});