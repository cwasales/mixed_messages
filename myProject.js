/*
        AUTHOR: Kristin
        DATE: 12/21/2021
        TITLE: Mixed Message Generator  
        */

//CREATE THREE PIECES OF DATA THAT WILL BE ADDED TO RANDOM QUOTES ARRAY MESSAGE

//CREATE AN ARRAY TO STORE COLORS
let colors = ["RED", "PINK", "NAVY", "BLACK", "CHOCOLATE", "LIME", "WHITE", "PURPLE", "ORANGE"];

//CREATE AN ARRAY TO STORE LUCKY NUMBERS
let luckyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 36, 38, 46, 56, 76, 88, 94, 120, 123, 207, 300, 443];

//CREATE AN ARRAY TO STORE FAMOUS INSPIRATIONAL QUOTES
let quotes = [
    "Be the change that you wish to see in the world. ― (Mahatma Gandhi)",

    "Imperfection is beauty madness is genius and it's better to be absolutely ridiculous than absolutely boring. ― (Marilyn Monroe)",

    "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. ― (Albert Einstein)",

    "It is never too late to be what you might have been. ― (George Eliot)",

    "There is no greater agony than bearing an untold story inside you. ― (Maya Angelou)",

    "Life isn't about finding yourself. Life is about creating yourself. ― (George Bernard Shaw)",

    "Success is not final, failure is not fatal: it is the courage to continue that counts. ― (Winston S. Churchill)",

    "Everyday I feel is a blessing from God, and I consider it a new beginning. ― (Prince Rodgers Nelson)"
];

let q = quotes[Math.floor(Math.random() * quotes.length)];

let randomColors = colors[Math.floor(Math.random() * colors.length)];

let randomNums = luckyNums[Math.floor(Math.random() * luckyNums.length)];

let result = "Random Message: " + q + "\nLucky Color: " + randomColors + "\nLucky Number: " + randomNums;

console.log(result);