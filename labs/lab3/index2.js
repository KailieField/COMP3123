
// Export Modules with functions or variables which can be stored in any external file
// Priamry file

var msg = require("./message.js");

console.log(msg.name); // hello
console.log(msg.score); // 22
console.log(msg.sum(5,3)); // 8
console.log(msg.myCars); // ["Mazda", "BMW", "Ford"]
console.log(msg.myCars[1]); // BMW

let myCar = new msg.car("Mazda");
console.log(myCar.Model()); // Mazda

let myAge = new msg.myClass(34);
console.log(myAge.Age()); // 34


