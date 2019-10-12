"use strict"
const quotes = [
    {
        quote: "It takes a village to raise a child.",
        author: " - Unknown Author"
    },
    {
        quote:"Change your thoughts and you change your world.",
        author: " - Norman Vincent"
    },
    {
        quote:"Those who realize their folly are not true fools.",
        author: " - Zhuangzi"
    },
    {
        quote:"Life is too important to be taken seriously.",
        author:" - Oscar Wilde"
    },
    {
        quote:"It’s better to be a lion for a day than a sheep all your life.",
        author:" - Elizabeth Kenny"
    },
    {
        quote:"Life is a question and how we live it is our answer.",
        author:" - Gary Keller"
    },

]

let body = document.body;
let quoteContainer = document.createElement("div");
body.appendChild(quoteContainer);
quoteContainer.className = "quoteContainer";

let quoteSpace = document.createElement("div");
quoteSpace.className = "quoteSpace";
quoteContainer.appendChild(quoteSpace);

let quoteMark = document.createElement("img");
quoteMark.className = "quoteMark";
quoteMark.src = "http://nahbnow.com/wp-content/uploads/2014/08/quotation-marks.jpg";
quoteSpace.appendChild(quoteMark)

let quoteBox = document.createElement("p");
quoteBox.className = "quoteBox";
quoteSpace.appendChild(quoteBox);

let authorBox = document.createElement("p");
authorBox.className = "authorBox";
quoteSpace.appendChild(authorBox);

let button = document.createElement('button');
button.setAttribute('type','button', 'onclick(randomQuote)');
button.className = "button"
button.appendChild(document.createTextNode('Pick a quote!'));
quoteSpace.appendChild(button);

button.addEventListener("click", () => {
    let i = 0;
    let randomNumber = [Math.floor(Math.random () * quotes.length)];
    let randomQuote = (quotes[randomNumber].quote);
    let randomAuthor= (quotes[randomNumber].author);
    quoteBox.innerHTML = randomQuote;
    authorBox.innerHTML = randomAuthor;
})


