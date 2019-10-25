"use strict"

function removeDuplicates(array){
    let newLetters = array.filter((item, index) => array.indexOf(item) === index);
    return newLetters
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
console.log(removeDuplicates(letters));

