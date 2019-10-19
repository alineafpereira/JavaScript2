"use strict"

const myHobbies = [
    'Meditation;',
    'Reading;',
    'Programming;',
    'Hanging out with friends;',
    'Going to the gym;',
];

document.getElementById('list').innerHTML = myHobbies.map(el =>
    `<li>${el}</li>`
).join('')
