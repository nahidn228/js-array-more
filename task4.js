/*
Task-4
Count the number of properties.

Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
Output:4

*/

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
let studentKey = Object.keys(student);
console.log(studentKey);

let count = studentKey.length;
console.log(count);
