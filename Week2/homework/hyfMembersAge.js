"use strict"

const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];

function ageCombinated (array){
    let ages = array.map(array => array.age).reduce((prevValue, ages)=> prevValue + ages, 0)
    return `The collective age of the HYF team is ${ages} years.`
}

console.log(ageCombinated(hackYourFutureMembers))