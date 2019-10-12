"use strict"

let clockEl = document.getElementById('hour');

 
setInterval(function () {
    let hour = ((new Date).getHours());
    let minutes = ((new Date).getMinutes());
    let seconds = ((new Date).getSeconds());
    clockEl.innerHTML = `Now it's ${hour}:${minutes}:${seconds}!`
}, 1000);

