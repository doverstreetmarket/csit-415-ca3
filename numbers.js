/* 

Anthony Reyes, Gabriel Teves, Marwan Abdalla, Steven Mallqui
Professor Sultana
Software Engineering II (CSIT415_01)
February 29, 2024

Program Description:
This program adds and subtracts two predefined numbers. It showcases basic operations using functions and prints the results to the console.

*/

// Defines a function 'add' that takes two parameters 'a' and 'b' and returns their sum.
function add(a, b){
    return a + b;
}

// Defines a function 'subtract' that takes two parameters 'a' and 'b' and returns their difference.
function subtract(a, b){
    return a - b;
}

// Defines the main function 'main' which computes the sum and difference of two numbers 'a' and 'b'.
function main(){
    // Initialize variables 'a' and 'b' with values 10 and 8 respectively.
    let a = 10;
    let b = 8;

    // Calculates the sum of 'a' and 'b' by calling the 'add' function.
    let sum = add(a, b);
    // Calculates the difference of 'a' and 'b' by calling the 'subtract' function.
    let difference = subtract(a, b);
    
    // Prints a message to the console indicating the values of 'a' and 'b'.
    console.log(`The numbers used for 'a' are ${a} and for 'b' are ${b}.`);
    // Prints a message to the console indicating the sum of 'a' and 'b'.
    console.log(`The sum of ${a} and ${b} is ${sum}.`);
    // Prints a message to the console indicating the difference of 'a' and 'b'.
    console.log(`The difference of ${a} and ${b} is ${difference}.`);
}

// Calls the main function to execute the program.
main();