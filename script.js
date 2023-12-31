// home page js

const close = document.getElementById("close");
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");

console.log(bar);
console.log(nav);
console.log(close);

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}


// single product page js

var MainImg = document.getElementById("MainImg");
var smallImages = document.getElementsByClassName("small-img");

smallImages[0].onclick = function(){
    MainImg.src = smallImages[0].src;
}

smallImages[1].onclick = function(){
    MainImg.src = smallImages[1].src;
}

smallImages[2].onclick = function(){
    MainImg.src = smallImages[2].src;
}

smallImages[3].onclick = function(){
    MainImg.src = smallImages[3].src;
}
