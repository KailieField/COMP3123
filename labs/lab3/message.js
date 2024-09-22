exports.sayHello = function(name) {
    return `Hello, ${name}`
}

exports.greet = function() {
    return 'Welcome to NodeJS Programming'
}

exports.college = "George Brown College, Toronto"

///module.exports

//export value
exports.name="Hello";
exports.score = 22;

//export function
exports.sum = function(a,b){return a + b;}

// list 
exports.myCars = ["Mazda", "BMW", "Ford"];

// export class
class car{
    constructor(type){
        this.type = type;
    }
    Model(){
        return this.type;
    }
}

exports.car = car

exports.myClass = class{
    constructor(age){
        this.age = age;
    }
    Age(){
        return this.age;
    }
}