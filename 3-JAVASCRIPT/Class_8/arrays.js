// Array

const numbers = [1, 4, 3, 2, 5];
const numbers2 = [6, 7, 8, 9, 10];

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element);
}

numbers.push(7);
numbers.push(6);
numbers.push(8);
numbers[2] = 6;
console.log(numbers);

numbers.splice(2, 2, 6);
// console.log(numbers);

numbers.unshift(0);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.splice(2, 1);
console.log(numbers);

//  Search in Array
console.log(numbers.indexOf(4));
console.log(numbers.sort());

console.log(typeof (numbers + numbers2));
console.log(2 + "2");
console.log(2 - "2");

console.log(numbers.concat(numbers2));
