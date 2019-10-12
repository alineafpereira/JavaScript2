"use strict"

const books = [
    {
      title: 'A Feminist Manifesto in Fifteen Suggestions',
      author: 'Chimamanda Ngozi Adichie',
      alreadyRead: true,
      cover: "https://images3.penguinrandomhouse.com/cover/9780525434801",
    },
    {
      title: 'The Brightest Star in the Sky',
      author: 'Marian Keyes',
      alreadyRead: true,
      cover: "http://4.bp.blogspot.com/-ndyGrHebF3U/Tc__E23M_rI/AAAAAAAABz8/uq2g4mE7VRA/s1600/keyes.jpg",
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: false,
      cover: "https://images-na.ssl-images-amazon.com/images/I/51aKPFuUy1L._SX324_BO1,204,203,200_.jpg",
    }
  ];

  /* I create a DIV and a SPAN manually on the HTML file*/
  /* Then I made the SPAN become a variable using its ID*/
const spanEl = document.getElementById("books");
 
/*With this loop I created a P with the name of the book and its author and inserted it on the HTML file, appended to the SPAN element*/
/*I also created another key to hold the URL with the covers and this is also on the loop */
/* with the IF inside of the loop, we go through the key alreadyRead to see if the book was read or not and 
depending of this condition, the background color changes */

for (let i = 0; i < books.length; i++){
    let p = document.createElement('p');
    p.innerHTML = `Name: ${books[i].title} by ${books[i].author}`;
    let cover = document.createElement('img');
    cover.src= (books[i].cover);
    if (books[i].alreadyRead === true){
        p.className = "read";
    } else {
        p.className = "unread";
    } 
    spanEl.appendChild(p);
    spanEl.appendChild(cover);
}


