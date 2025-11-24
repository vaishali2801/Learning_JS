//  where one function has to wait for another function (like waiting for a file to load).
// if you want to wait for the result of the previous function call
//  before the next statement is executed, you can use a callback function.

// callback is function passed as an argument to another function
// using callback we can do asynchronous task in js
// a callback function it runs after another function has finished

// **** when you pass functions as an arguments don't use parenthesis ****

//JavaScript is asynchronous—that means some tasks take time, like:
//loading a file
//fetching data from the internet
//waiting for a timer

function first(callback) { 
        console.log("First task done");
        callback();   
}
function second() {
    console.log("Second task done");
}
first(second);

//another example
const multiply = (result) => {
    console.log("multiply is: ",result);
}
function Mul(a,b,multiply){
    let total = a*b;
    multiply(total);
}
Mul(5,5,multiply);// here we can't use parenthesis 