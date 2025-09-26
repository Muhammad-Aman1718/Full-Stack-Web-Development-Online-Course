// Conditional Statements in JavaScript

// let age = 40;

if (age > 18) {
  console.log("you are eligible");
} else {
  console.log("you are not eligible");
}

if (age <= 20) {
  console.log("you enter just in web ");
} else if (age >= 20 && age <= 40) {
  console.log("you enter in agentic ai course");
} else if (age >= 40 && age <= 60) {
  console.log("you enter in Data science");
} else {
  console.log("sorry, you are not eligible");
}

// Ternary Operator
let a = 2;

a > 18 ? console.log("you are eligible") : console.log("you are not eligible");
