let quotes = [
    {
        "author": "Eleanor Roosevelt",
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
    },
    {
        "author": "Benjamin Franklin",
        "quote":"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    },
    {
        "author": "Aristotle",
        "quote": "It is during our darkest moments that we must focus to see the light.",
    },
    {
        "author": "Helen Keller",
        "quote": "Life is either a daring adventure or nothing at all.",
    },
    {
        "author": "Confucius",
        "quote": "Life is really simple, but we insist on making it complicated.",
    },
    {
        "author": "homas Jefferson",
        "quote": "I find that the harder I work, the more luck I seem to have.",
    },
    {
        "author": "Theodore Roosevelt",
        "quote": "Believe you can and you're halfway there.",
    }    
];

//Initial function, similar to what I used with changing background color
function anotherQuote () {
    let index = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[index];
}

//Also tried this one, still doesn't work
function anotherQuote () {
	let randomNumber = Math.floor(Math.random() * (quotes.length));
	let randomQuote = quotes[randomNumber];
	return randomQuote;
}

//Another one, does't work either
function anotherQuote () {
    return quotes.splice(Math.floor(Math.random() * quotes.length), 1);
}


