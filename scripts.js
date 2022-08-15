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
        footer.classList.add("fixed-bottom" && !cover);
        if (pageContent) {
            pageContent.style.paddingBottom = 120 + "px";
        }
    }
}

window.addEventListener("resize", resizer);
window.onload = resizer();