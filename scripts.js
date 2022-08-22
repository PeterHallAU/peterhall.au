const footer = document.getElementById("footer");
var pageContent = document.getElementById("page-content");
var cover = document.getElementById("cover");

function resizer() {
  if (window.innerWidth < 993 && !cover) {
    footer.classList.remove("fixed-bottom");
    if (pageContent) {
      pageContent.style.paddingBottom = null;
    }
  } else {
    footer.classList.add("fixed-bottom");
    if (pageContent) {
      pageContent.style.paddingBottom = 120 + "px";
    }
  }
}

var i = 0;
var myName = "Peter Hall"
var txt = "Hello, I'm " + myName + ".";
var speed = 50;

function typeWriterEffect() {
  if (i < txt.length) {
    if (i == 10) {
      document.getElementById("introduction").innerHTML += "<strong id=myName>"
    }

    if (10 <= i && i <= (txt.length - 2)) {
      document.getElementById("myName").innerHTML += txt.charAt(i);
    } else {
      document.getElementById("introduction").innerHTML += txt.charAt(i);
    }

    i++;
    setTimeout(typeWriterEffect, speed);
  }
}

window.addEventListener("resize", resizer);
window.onload = resizer();
window.onload = document.getElementById("introduction").innerHTML = "";
window.onload = typeWriterEffect();