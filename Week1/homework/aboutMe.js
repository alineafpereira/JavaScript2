"use strict"

/* here was to set the font-family as Arial, Sans-Serif */
document.body.style.fontFamily = "Arial, sansSerif"; 

/* this block put my own info in the spans and also give each line of LI a new class*/
/* the style for the class was set inside the tag <style> on the HTML file */

let nicknameEl = document.getElementById("nickname");
nicknameEl.textContent = ("Aline");
nicknameEl.className = "list-item";

let favFoodEl = document.getElementById("fav-food");
favFoodEl.textContent = ("Pizza");
favFoodEl.className = "list-item";

let hometowneEl = document.getElementById("hometown");
hometowneEl.textContent = ("Curitiba");
hometowneEl.className = "list-item";

/*create a IMG, linked to a picture of me and appended to my HTML file */
/*I choose to set a width so the image could fit the exercise better*/
let imgEl = document.createElement('img');
imgEl.src= "https://aloaline.com.br/aline.jpg";
imgEl.width= 300;
document.body.appendChild(imgEl);
