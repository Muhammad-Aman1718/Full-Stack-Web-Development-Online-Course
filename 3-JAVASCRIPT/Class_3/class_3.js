// Data Types in JavaScript

// 1. Primitive Data Types

// Primitive data types are immutable and hold single values directly.

// num = 42;
// let str = "Hello, World!";
// let bool = true;
// let n = null;
// let undef = undefined;

// console.log(num2);
// console.log(num);

// 3. Non-Primitive Data Types / Reference Data Types

//  Non-primitive data types can hold multiple values and are mutable.
// They are stored as references.
// Reference is  a pointer to the location in memory where the object is stored.
//  "reference" is a memory address that points to the actual data stored elsewhere in memory, rather than storing the data itself

let obj = { name: "Alice", age: 30 };
let arr = [1, 2, 3, 4, 5];

// Linear Data Structures
// Linear data structures store elements in a sequential manner.
let linearArr = [10, 20, 30, 40, 50];
let linearObj = { first: "John", second: "Doe" };

// Non-Linear Data Structures
// Non-linear data structures store elements in a hierarchical manner.

let tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

let num = -42;
let str = "Hello, World!";
let bool = false;
let n = null;
let undef; // undefined
undef = "Now I have a value!";

// console.log(num2);
console.log(num);
console.log(str);
console.log(bool);
console.log(n);
console.log(undef);
