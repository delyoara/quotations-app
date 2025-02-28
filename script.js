const button = document.querySelector('#submit');
const form = document.querySelector('#description');

let quoteCount = 0;

form.addEventListener('submit', (event) => {
    let author = document.querySelector('#auteur').value;
    let quote = document.querySelector('#citation').value;
    console.log(quote,author); 

    addQuote(quote, author);
})


  function addQuote(quote, author) {
    quoteCount++;

    const count = document.getElementById('count');
    count.innerText = quoteCount + " " + "citations";

    const quoteParagraph = document.createElement('p');
    quoteParagraph.classList.add('text');
    quoteParagraph.textContent = quote;

    const authorParagraph = document.createElement('p');
    authorParagraph.classList.add('author');
    authorParagraph.textContent = author;

    const quoteAndAuthor  = document.createElement('div');
    quoteAndAuthor.classList.add('quote');
    
    // Récupérez l’élément ayant l’id "quote-list"
    
    let quoteList = document.querySelector('#quote-list');
    //ajoutez-y la nouvelle citation avec appendChild().
    quoteList.appendChild(quoteAndAuthor);
    quoteAndAuthor.appendChild(quoteParagraph);
    quoteAndAuthor.appendChild(authorParagraph);
   };