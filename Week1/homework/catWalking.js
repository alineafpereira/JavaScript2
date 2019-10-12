"use strict"

let imageEl = document.getElementsByTagName("img")[0];
let marginLeft = imageEl.style.marginLeft = '0px';
let end = (window.innerWidth);

function catWalk() {
    let initialPoint = parseInt(imageEl.style.marginLeft);
    imageEl.style.marginLeft = (initialPoint + 10) + 'px';
    if (initialPoint > end){
        imageEl.style.marginLeft= "10px"
    }
}
window.setInterval(catWalk, 50);

//I tried many different ways to make the dancing cat show in the middle of the way, stand for 5 seconds and 
// then the black cat come back and finish the way, but any of them worked.
// I decided to leave half of the exercise working.

//