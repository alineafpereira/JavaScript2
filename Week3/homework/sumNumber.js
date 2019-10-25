"use strict"

const createBase = number => {
    const sum = anotherNumber => {
        return number + anotherNumber;
    };

    return sum;
};

const addSix = createBase(9);
const addSeven = createBase(17);
const addEight = createBase(28);


console.log(addSix(6));
console.log(addSeven(7));
console.log(addEight(8));

