// Quesrion 1

var Name = "Mike"; // can be redeclared and reassigned
let age = 25; // cannot be redeclared but can be reassigned
const PI = 3.14; // cannot be redeclared and cannot be reassigned

// Question 2

// 1. String — text wrapped in quotes
let name = "Mike";

// 2. Number — integers and decimals 
let age2 = 25;
let price = 9.99;


// 3. Boolean — true or false only
let isLoggedIn = true;

// 4. Object — a collection of key-value pairs
let person = {
    name: "Mike",
    age: 25,
    isStudent: false
}
// 5. Null — Intentionally empty value

let emptyValue = null;

// 6. Undefined — a variable that has been declared but not assigned a value
let anything; // If we console.log(anything), it will return undefined

// 7. bigint — for Larger integers
let bigIntValue = 12345678901230n; // The 'n' at the end indicates a BigInt


//  8. Symbol — a unique and immutable primitive value often used as object keys
let uniqueId = Symbol("id"); // Each Symbol is unique, even if they have the same description


// Question 3
const student = {
    name: "Alice ",
    age: 21,
    course: "Computer Science",
    isEnrolled: true
};

console.log(student.name);

student.grade = "A";

console.log(student);


// Question 4
let numbers = [1, 2, 3, 2, 4, 5, 1, 3, 3];
let duplicate = {};

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (duplicate[num]) {
        duplicate[num]++;
    } else {
        duplicate[num] = 1;
    }
}
console.log(duplicate);


// Question 6
const factorial = (n) => {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5))


