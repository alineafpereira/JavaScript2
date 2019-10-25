"use strict"

let button = document.getElementById("btn");
const tipToBePaid = document.getElementById('result');
const each = document.getElementById('each');


/* With this function here, we can calculate how much will be the tip to be paid considering
the total value of the bill, the quality of the service and how many people are spliting the 
total check.
I tried to prevent just one error, in case the user try to run the program declaring the total 
value of the bill as 0, but there was another conditions I would like to implement, such as
make sure the user receive a message in case insert digits different from numbers.
Even tho I tried to use some kind of remove attribute to rip 'each' off when the bill
wasn't being splitted, I couldn't find a way I felt confortable using for now, 
that's way I repeated the code inside a IF statement.
*/

button.addEventListener('click', () => {
    const totalCheck = Number(document.getElementById('totalCheck').value);
    const perc = Number(document.getElementById('percentage').value);
    const splitTheTip = Number(document.getElementById('splitTheCheck').value);
    if (totalCheck <= 0){
        alert("Your bill need to be more than 0!")
    }
    if (splitTheTip === 1){
        let tip = (perc * totalCheck / 100) / splitTheTip;
        let text = document.createElement('h3');
        text.id= "text";
        text.innerHTML = "For this check, the tip is"
        let tipValue = document.createElement('p');
        tipValue.id="tipValue";
        tipValue.innerHTML = tip.toFixed(2);
        tipToBePaid.appendChild(text);
        tipToBePaid.appendChild(tipValue);
        
    }else{
        let tip = (perc * totalCheck / 100) / splitTheTip;
        let text = document.createElement('h3');
        text.id= "text";
        text.innerHTML = "For this check, the tip is"
        let tipValue = document.createElement('p');
        tipValue.id="tipValue";
        tipValue.innerHTML = tip.toFixed(2);
        let each = document.createElement('p');
        each.id= "each"
        each.innerHTML = "per person"
        tipToBePaid.appendChild(text);
        tipToBePaid.appendChild(tipValue)
        tipToBePaid.appendChild(each)
        
    }
})
