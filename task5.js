/*
Task-5 (Hard)
Loop through an object and print the key-value pairs with their types
Input:
let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

Output:
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean 
*/

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (let user in myObject) {
  //console.log(user, ":", myObject[user], " | type:", typeof myObject[user]);

  //find the key
  //console.log(user);

  //find the key-value
  //console.log(myObject[user]);

  //find the key-value pairs
  //console.log(user,":", myObject[user]);

  //find the type of key
  //console.log("Type of", user, " = ", typeof user);

  //find the type of key-value 
  //console.log("Type of", myObject[user], " = ", typeof myObject[user]);
  

}
