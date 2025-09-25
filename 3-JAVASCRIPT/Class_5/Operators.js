// Operators in JavaScript

// 1. Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (a - b)); // 5
console.log("Multiplication: " + a * b);
console.log("Division: " + 5 / 2); // 2
console.log("Modulus: " + (5 % 2)); // 0
console.log("Exponentiation: " + a ** b); // 100000
console.log("Floor Division: " + Math.floor(5 / 2)); // 2

// 2. Assignment Operators

let c = 20;
c += 5; // c = c + 5  this is Addition assignment
console.log("c after += 5: " + c); // 25
c -= 5; // c = c - 5
console.log("c after -= 5: " + c);
c *= 2; // c = c * 2
console.log("c after *= 2: " + c);
c /= 5; // c = c / 5
console.log("c after /= 5: " + c);
c %= 3; // c = c % 3
console.log("c after %= 3: " + c);
c **= 2; // c = c ** 2
console.log("c after **= 2: " + c);

// 3. Comparison Operators
let x = "10";
let y = 10;
console.log("x == y: " + (x == y)); // false    ===
console.log("x != y: " + (x != y)); // true     !==
console.log("x === y: " + (x === y)); // Type and value check
console.log("x !== y: " + (x !== y)); // Type and value check
console.log("x > y: " + (x > y)); // false
console.log("x < y: " + (x < y)); // true
console.log("x >= y: " + (x >= y)); // false
console.log("x <= y: " + (x <= y)); // true

// 4. Logical Operators
let p = true;
let q = false;

console.log("p && q: " + (p && q)); // false
console.log("p || q: " + (p || q));
console.log("!p: " + !p); // false

// a = [];

a = 1;
b = "";

// 0, null, undefined, NaN, " ", false  -----> falsely Values
// "fdsa", 1, -1, [], {}  -----> truely Values

// console.log(Boolean(a));
// console.log(Boolean(b));
