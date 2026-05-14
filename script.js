
const header = document.getElementById("header");
const innerHeader = document.getElementById("inner-header");
const text = document.getElementsByTagName("a");
const logo = document.getElementById("logo");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
      header.classList.add("scrolled");
      innerHeader.classList.add("scrolled");
      logo.src = "images/logo-brown.png";
      text[0].style.color = "#121212";
      for (let i = 1; i < text.length; i++) {
       text[i].style.color = "#8c8c8c";
}
  } else {
      header.classList.remove("scrolled");
      innerHeader.classList.remove("scrolled");
      logo.src = "images/logo-white.png";
      text[0].style.color = "#e9e9e9";
       for (let i = 1; i < text.length; i++) {
       text[i].style.color = "white";
      }
  }
});

// window.addEventListener("mousemove", () => {
//     header.classList.add("lol");
    
// })




