var msg = require("./message")
var arit = require("./arithmatics")
var {mul , sub} = require("./arithmatics")
var Employee  = require("./Employee")

console.log(msg)
console.log(msg.college)
console.log(msg.sayHello("Pritesh"))

console.log(arit)
console.log(mul(10, 2))

console.log(typeof Employee)
console.log(Employee)

var e1 =new Employee(1, "Pritesh")
e1.print()

//console.log(module)