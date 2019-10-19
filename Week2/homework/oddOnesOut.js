"use strict"
/*the old function is*/

/* function doubleEvenNumbers(numbers) {
    const newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        newNumbers.push(numbers[i] * 2);
      }
    }
    return newNumbers;
  }
  
  const myNumbers = [1, 2, 3, 4];
  console.log(doubleEvenNumbers(myNumbers))*/

/*the new function using map() and filter() is */

function doubleEvenNumbers(array){
    let evenTimesTwo = array.filter(x => x % 2 === 0).map(x => x * 2);
    return evenTimesTwo
}

let numbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(numbers));
/*Decided to test with another numbers just to check if was really working */
let bigNumbers = [20, 43, 23, 12, 90, 56, 48]
console.log(doubleEvenNumbers(bigNumbers))