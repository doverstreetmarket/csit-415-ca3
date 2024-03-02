/* 

Anthony Reyes, Gabriel Teves, Marwan Abdalla, Steven Mallqui
Professor Sultana
Software Engineering II (CSIT415_01)
February 29, 2024

Program Description:
This program adds, subtracts, multiplies, and divides two predefined numbers. It showcases basic operations using functions and prints the results to the console.

*/

// Defines a function 'multiplication' that takes two parameters 'a' and 'b' and returns their product.
function multiplication(a, b){
    return a * b;
}

// Defines a function 'addition' that takes two parameters 'a' and 'b' and returns their sum.
function addition(a, b){
    return a + b;
}

// Defines a function 'division' that takes two parameters 'a' and 'b' and returns their quotient.
function division(a, b){
    if(a  === 0 || b === 0)
        return "invalid since you cannot divide by zero"
    else
        return a / b;
}

// Defines a function 'subtraction' that takes two parameters 'a' and 'b' and returns their difference.
function subtraction(a, b){
    return a - b;
}

// Defines the main function 'main' which computes the sum and difference of two numbers 'a' and 'b'.
function main(){
    // Initialize variables 'a' and 'b' with values 10 and 8 respectively.
    let a = 10;
    let b = 8;

    // Calculates the sum of 'a' and 'b' by calling the 'addition' function.
    let sum = addition(a, b);
    // Calculates the difference of 'a' and 'b' by calling the 'subtraction' function.
    let difference = subtraction(a, b);
    // Calculates the product of 'a' and 'b' by calling the 'multiplication' function.
    let product = multiplication(a, b);
    // Calculates the quotient of 'a' and 'b' by calling the 'division' function.
    let quotient = division(a, b);

    // Prints a message to the console indicating the values of 'a' and 'b'.
    console.log(`The numbers used for 'a' are ${a} and for 'b' are ${b}.`);
    // Prints a message to the console indicating the sum of 'a' and 'b'.
    console.log(`The sum of ${a} and ${b} is ${sum}.`);
    // Prints a message to the console indicating the difference of 'a' and 'b'.
    console.log(`The difference of ${a} and ${b} is ${difference}.`);
    // Prints a message to the console indicating the product of 'a' and 'b'.
    console.log(`The product of ${a} and ${b} is ${product}.`);
    // Prints a message to the console indicating the quotient of 'a' and 'b'.
    console.log(`The quotient of ${a} and ${b} is ${quotient}.`);
}

// Calls the main function to execute the program.
main();