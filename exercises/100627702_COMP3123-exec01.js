/*

        COMP 3123 FULL STACK DEVELOPMENT 1 | LAB 1 EXERCISE | KAILIE FIELD | 100627702
                            SUBMISSION DATE: 08 SEPTEMBER 2024

*/

//---------------------------------------------------------------------------------------------------

/*
    EXERCISE 01: 
        WRITE A JAVASCRIPT PROGRAM TO CAPITALIZE THE FIRST LETTER OF EACH WORD OF A GIVEN STRING
*/


//---------------------------------------------------------------------------------------------------

// Capturing user input synchronously from terminal, SIGINT (signal interrupt) set to TRUE
const prompt = require("prompt-sync")({sigint:true});

const capitalizedString = (userInput) => {

    //Taking User Input, splitting into an array for modification
    const stringWords = userInput.split(' ');

    // Capitalizing the first letter of each word
    /*
            > using .map to return new array with transformed elements 
            > ternary operator for readbility & conciseness, avoiding over use of if/else statements
            > using slice --> extracting parts of a string and performing transformation
                          --> creating a new substring without modifying original data
    
    */
   const capitalizedString = stringWords.map(

    (word) => (word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word) //<--- ternary operator  [condition ? true : false]

   );

   // Joining the words from the array, arranging for string output 
   return console.log("New String: ", capitalizedString.join(' '));

};

//MAIN PROGRAM WITH CONTINUE OR EXIT MENU OPTIONS

const question1 = () => {

    let inProgram = true;

    while (inProgram){

        // Retrieving User Input
        const userInput = prompt("Enter a sentence. I will capitalize the first letter of every word within that sentence: ");

        if(userInput){
            capitalizedString(userInput);
        }
        else {
            console.log("Please provide a valid input...");
        }

        // Menu Options
        const userChoice = prompt("Continue? [y/n]: ").toLowerCase();
        if(userChoice !== 'y'){
            inProgram = false;
        }
    }
    console.log("Exiting...");
};

question1();


