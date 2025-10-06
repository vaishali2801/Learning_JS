// The JavaScript if...else statement is used to execute/skip a block of code based on a condition.

// In computer programming, the if...else statement is a conditional statement that executes a block of code only when a specific condition is met
let age = 18;
if(age >= 18){
    console.log("You are eligible to vote");
    console.log("You can also contest in elections");
}else{
    console.log("You are not eligible to vote");
    console.log("You can not contest in elections");
}
// The if...else statement is a fundamental control structure in programming that allows developers to make decisions based on certain conditions. It helps in controlling the flow of execution in a program by executing different blocks of code depending on whether a specified condition evaluates to true or false.
let marks = 90;
if(marks >= 90){
    console.log("you got A+ grade");
}
else if(marks >= 80){
    console.log("you got A grade");
}
else if(marks >=75){
    console.log("you got B grade");
}
else if(marks >= 55){
    console.log("you got C grade");
}
else if(marks >= 45){
    console.log("you got D grade");
}
else{
    console.log("you are failed");
    console.log("better luck next time");
}