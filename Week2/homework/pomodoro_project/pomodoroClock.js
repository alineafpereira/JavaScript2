"use strict"

const defaultTime = document.getElementById("timeLength");
const decreaseNumber = document.getElementById('less');
const increaseNumber = document.getElementById('more');
const buttonPlay = document.getElementById('play');
const timer = document.getElementById('timeRunning');
const pauseButton = document.getElementById('pause')



decreaseNumber.onclick = function() {
    if (defaultTime.value > 0){
        defaultTime.value = parseInt(defaultTime.value) -1
    }
 }
 increaseNumber.onclick = function() {
    defaultTime.value = parseInt(defaultTime.value) + 1
 }


buttonPlay.addEventListener("click", () => {
    let s = defaultTime.value * 60;
    const countDown = setInterval(timeIsRunning,1000);
    function timeIsRunning () {
        s-- ;
        let min = Math.floor(s / 60);
        let sec = s % 60; 
        timer.innerHTML = min + ":" +sec
    };
    pauseButton.addEventListener("click", () => {
        clearInterval(countDown);
    })
})














/*
*/
