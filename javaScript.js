let quotes = [
    {
        "author": "-Eleanor Roosevelt-",
        "quote": "\"The future belongs to those who believe in the beauty of their dreams.\"",
    },
    {
        "author": "-Benjamin Franklin-",
        "quote":"\"Tell me and I forget. Teach me and I remember. Involve me and I learn.\"",
    },
    {
        "author": "-Aristotle-",
        "quote": "\"It is during our darkest moments that we must focus to see the light.\"",
    },
    {
        "author": "-Helen Keller-",
        "quote": "\"Life is either a daring adventure or nothing at all.\"",
    },
    {
        "author": "-Confucius-",
        "quote": "\"Life is really simple, but we insist on making it complicated.\"",
    },
    {
        "author": "-Thomas Jefferson-",
        "quote": "\"I find that the harder I work, the more luck I seem to have.\"",
    },
    {
        "author": "-Theodore Roosevelt-",
        "quote": "\"Believe you can and you're halfway there.\"",
    }    
];

let randomNumber = Math.floor(Math.random() * quotes.length);
let author = quotes[randomNumber].author;
let randomQuote = quotes[randomNumber].quote;


function anotherQuote () {  
    randomNumber = Math.floor(Math.random() * quotes.length);
    author = quotes[randomNumber].author;
    randomQuote = quotes[randomNumber].quote;
    document.getElementById('quoteDisplay').innerHTML = author + " " + randomQuote;  
}  



console.log(quotes[randomNumber].author);
console.log(quotes[randomNumber].quote);