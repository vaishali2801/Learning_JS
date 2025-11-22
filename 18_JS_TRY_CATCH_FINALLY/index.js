// JavaScript try...catch...finally Statement
// The try, catch and finally blocks are used to handle exceptions (a type of an error).
// types of errors in programming
// 1.syntax error
// example cotsn instead of const will throw an syntax error
// 2. runtime error
// This type of error occurs during the execution of the program. For example,
// calling an invalid function or a variable.
// These errors that occur during runtime are called exceptions.
// suppose we have't define our function and try to call that function or invoke that function like function play()
// The main code is inside the try block. While executing the try block, if any error occurs, it goes to the catch block. The catch block handles the errors as per the catch statements.
// If no error occurs, the code inside the try block is executed and the catch block is skipped.
// The throw statement lets you make your own errors.
// The finally statement lets you execute code after try and catch.

//try...catch...finally in Simple Words
//try block → You write your normal code here. JavaScript “tries” to run it.
//catch block → If something goes wrong in the try block, the “catch” block will run and show the error.
//finally block → This block will always run, whether there was an error or not.
//throw is used to create your own error.
//Example: If someone enters a negative age, you can throw your own error saying “Age cannot be negative”.

function checkAge() {
    let age = 1;
    try {
        if (age >= 18) {
            console.log("You are eligible");
        } else {
            throw new Error("you are not eligible for voting");
        }
    } catch (error) {
        console.log(error.message);
    }
}
checkAge();
// another example
function atmPin(userPin) {
    const pin = 11111;
    try {
        if (pin === userPin) {
            console.log("success");
        } else {
            throw new Error("invalid pin");
        }
    } catch (error) {
        console.log(error.message);
    }
}
atmPin(11111);
//another
let raceResult = () => {
    let car1Performance = false;
    try {
        if (car1Performance === true) {
            console.log("you have win the race");
        } else {
            throw new Error("you loose the race");
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("one winner will be announce");// always execute this statement
    }
};
raceResult();
const isStudentPassed = () => {
    let marks = 34;

    try {
        if (marks >= 35) {
            console.log("you have passed this examination");
        } else if (marks < 35) {
            throw new Error("you have failed this examination");
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("this will execute regardless of result ");
    }
};
isStudentPassed();