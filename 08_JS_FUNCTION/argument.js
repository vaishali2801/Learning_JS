// JavaScript functions have a built-in object called the 'arguments' object, which is an array-like object.

// The 'arguments' object contains an array of the arguments passed to the function when it was called (invoked).

// This allows you to perform operations like finding the sum of an indefinite number of arguments:

function Num() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log("Total sum: " + sum);
}
Num(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);