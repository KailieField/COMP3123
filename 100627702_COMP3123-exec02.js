
/*----------------------------------------------------------------------------



                EXERCISE 02 | COMP3123 | KAILIE FIELD | 100627702
                        SUBMISSION DATE: 15 SEPTEMBER 2024


----------------------------------------------------------------------------*/
/*

[EXERCISE 01] : Rewrite the following code block using ES6 syntax, 
ie. const, let, arrow function, template literals and for..of 

// function gretter(myArray, counter){
//     var greetText = 'Hello ';
    
//     for(var index = 0; index < myArray.length; index++){
//         console.log(greetText + myArray[index]);
//     }
// }

// gretter(['Randy savage', 'Ric Flair', 'Hulk Hogan'], 

//--------------------------------------------------------------------------*/
// [ ANSWER 01 ] :

const greeter = (myArray, counter) => {
    const greetText = 'Hello';

    myArray.slice(0, counter).forEach(element => {
        console.log(`${greetText} ${element}`)
    });
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

/*----------------------------------------------------------------------------

[EXERCISE 02] : Using Destructuring assignment syntax and the spread operator, 
write a function that will capitalize the first letter of a string.

// console.log(capitalize('fooBar'));
// console.log(capitalize('nodeJs'));  OUTPUT: FooBar, ndoeJs

----------------------------------------------------------------------------*/

// [ ANSWER 02 ] :

const capitalize = ([firstLetter, f2,...rightWords]) => firstLetter.toUpperCase() + f2.toLowerCase() + rightWords.join("");
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));


/*----------------------------------------------------------------------------

[EXERCISE 03] : Using array.proto.map() create a function to use the 
capitalize method in Exercise 2 to upper case the first character of each
colour in the following array..

const colors = ['red', 'green', 'blue']
//code
console.log(capitalizedColors)

// OUTPUT: ['Red', 'Green', 'Blue']
----------------------------------------------------------------------------*/

// [ ANSWER 03 ] : 

const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map((color) => capitalize(color));
console.log(capitalizedColors);

/*----------------------------------------------------------------------------

[EXERCISE 04] : Using array.proto.fiter() create a function that will filter 
out all of the values of the array that are less than twenty..

var values = [1, 60, 34, 30, 20, 5]
//code
console.log(filterLessThan20)
//OUTPUT : [1, 5]

----------------------------------------------------------------------------*/
// [ ANSWER 04 ] :

const values = [1, 60, 34, 30, 20, 5]
const filterLessThan20 = values.filter((value) => value < 20);
console.log(filterLessThan20);

/*----------------------------------------------------------------------------

[EXERCISE 05] : Using array.proto.reduce() calculate the sum and product of
a given array..

var array = [1, 2, 3, 4]
//code
console.log(calculateSum);
cosole.log(calculateProduct);
// OUTPUT: 10, 24 
----------------------------------------------------------------------------*/

// [ ANSWER 05 ] :

const array = [1,2,3,4]
const calculateSum = array.reduce((total, element) => total + element);
const calculateProduct = array.reduce((total, element) => total * element);
console.log(calculateSum);
console.log(calculateProduct);

/*----------------------------------------------------------------------------

[EXERCISE 06] : 
> Using ES6 syntax for class and subclass using extends to create
a Sedan subclass which derives from Car Class. 
> The Parameters for the car class
is the: model, year. 
The parameters for the subclass is the: model, year and balance.
> Use the super key word in the Sedan subclass to set the odmel and name in
base Car constructor. 

EX:
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
//subclass - extends Car super class
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());

OUTPUT: 
Model: Pontial Firebird Engine 1976
Volvo SD has a balance of $30000.00
----------------------------------------------------------------------------*/

// [ ANSWER 06 ] :
// class Car {
//     constructor(model,year){
//         this.model = model;
//         this.year = year;
//         getCarDetails(){
//             return this.model + this.year;
//         }
//     }
// }

class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    setModel(m){this.model = m;}
    getModel(){return this.model;}

    setYear(y){this.year = y;}
    getYear(){return this.year;}

    details(){
        var details = this.model + " " + this.year;
        return details;
    }
}
const car2 = new Car('Pontiac Firebird ' + 1976);
car2.setModel('Pontiac Firebird');
car2.setYear(1976);
console.log("Model: " + car2.details());


class Sedan extends Car {
    constructor(model, year, balance){
        super(model);
        this.year = year;
        this.balance = balance;
    }
    info() {return this.getModel() + this.getYear() + " has a balance of " + `$${(this.balance).toFixed(2)}`}
}
const mySedan = new Sedan("Volvo SD ", 2018, 30000);
console.log(mySedan.info());