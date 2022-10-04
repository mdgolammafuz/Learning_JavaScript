let name;
console.log(name) /* We will get undefined in the 
                     console as it is not initialized */

let anotherName = 'Mafuz!'; // String Literal. We can use "" instead of ''
console.log(anotherName)

let age = 30; // Intergers & Floating point numbers, both are of number type
console.log(age)
console.log(typeof age) // 

age = "Thirty"; // We are changing the type of the value of the variable
console.log(age)
console.log(typeof age)

let isDead = false; // Boolean
console.log(isDead)

let firstName = undefined;
console.log(firstName)

let selectedLanguage = null; // when we want to clear the value of a variable
console.log(selectedLanguage)

console.log(typeof firstName)

console.log(typeof isDead)

console.log(typeof selectedLanguage)

let person = {
    name: 'Mafuz',
    age: 30
}

// Dot Notation
person.name = 'Golam';
console.log(person)

// Bracket Notation
let selection = 'name'; // Usuallu used when we don't know the target property beforehand
person[selection] = "Nasrina";

console.log(person.name)

let selectedProducts = ['Book', 'Laptop', 'Battery'];

selectedProducts[3] = 1; /* length of an Array can change. The type of objects in an Array
                                 can also change */

console.log(selectedProducts)
console.log(typeof selectedProducts) // Type of an array is Object
console.log(typeof selectedProducts.length) // Array objects have built in properties 