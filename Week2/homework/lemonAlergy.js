"use strict"


function lemonOut (array){
    let withoutLemon = array.filter((value) => value !== ' Lemon')
    return `My mom bought me a fruit basket, containing ${withoutLemon}!`
} 

const fruitBasket = [' Apple', ' Lemon', ' Grapefruit', ' Lemon', ' Banana', ' Watermelon', ' Lemon'];
console.log(lemonOut(fruitBasket))