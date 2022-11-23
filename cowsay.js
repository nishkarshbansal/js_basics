const cowsay = require("cowsay");
const Quote = require('inspirational-quotes');
const text = Quote.getQuote().text
console.log(
    cowsay.say({
        text  : text,
        e : "69",
        T : "69"
    })
);