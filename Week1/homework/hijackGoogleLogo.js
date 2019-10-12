"use strict"

function hijackGoogleLogo (){
    let logo = document.getElementById("hplogo");
    for (let i = 0; i < logo.length; i++){
        logo[i].src = "https://www.hackyourfuture.dk/static/logo-dark.svg"
        logo.className = "hyflogo"
    }
}
