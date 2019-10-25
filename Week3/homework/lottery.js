"use strict"

/* we get the random numbers with the function below */
function getRandomNumbers(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber 
}

/* then we push the numbers inside of the array */
/* I put the range of numbers until 50 so we could get higher numbers. I thought this way was better to show 
the sayThree and sayFive working, because let's say the higher number is 15, there's is not that much of divisions to show. */

let numbers = [];
for (let i = 0 ; i < 5 ; i++){
  numbers.push(getRandomNumbers(1, 50));
}

/* and finally we create filters where the callbacks show us the numbers that are divisible for 3 and 5 */
const sayThree = numbers.filter(number => number % 3 === 0);
const sayFive = numbers.filter(number => number % 5 === 0);


console.log(numbers, sayThree, sayFive);



