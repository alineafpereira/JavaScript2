const defaultTime = document.getElementById("timeLength");
let minutesDefault = 25;
defaultTime.textContent = minutesDefault + ":" + "00";
let buttonLess = document.getElementById('less');
let buttonMore = document.getElementById('more');
let count = parseInt(minutesDefault);

buttonLess.addEventListener("click", () => {
    if (count > 0){
        count -= 1;  
        defaultTime.textContent = count + ":" + "00";
    }
})

buttonMore.addEventListener("click", () => {
    if (count > 0){
        count += 1;  
        defaultTime.textContent = count + ":" + "00";
    }
})

let timeIsRunning = document.getElementById('timeRunning');

/* Sander and Wim, 
I didn't finish this project yet but posted anyway along with the other 
exercises that are already done, so you guys can take a look before we get to close from the deadline.
I'll keep working on this and will update when it's ready.
I'm sorry for the inconvenience.
*/




