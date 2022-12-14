/*
JavaScript objects are written in JavaScript Object Notation
(JSON) — a series of comma-separated key/value pairs between
 curly braces, which you can store in a variable:
*/

let myBook = {
    title: 'The Story of Tau',
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};


let bookTitle = myBook.title;  // 'The Story of Tau'
console.log(bookTitle)

let bookPages = myBook.numberOfPages  // 250
console.log(bookPages)

let notAnAttribute = myBook.numberPages
console.log(notAnAttribute)  // Result is 'undefined' 