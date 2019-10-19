"use strict"

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

function dailyRate (array){
    let dailyHours = array.map(array => array.duration / 60 * 25).reduce((prevValue, mondayHours)=> prevValue + mondayHours, 0)
    return `You made EUR ${dailyHours.toFixed(2)} in your labor journey today.`
}

console.log(dailyRate(mondayTasks))


