// Parameters and arguments in JavaScript functions allow us to send additional information to our function.
// Parameters are placeholders defined in the function declaration.
// Arguments are the actual values passed when we invoke the function.

function total(A,B){ // A and B are parameters
    console.log("The sum is: " + (A + B));
}
total(5,10); // Here, 5 and 10 are arguments passed to the function.

function num(a=5,b=9){
    console.log(a+b);   
}
num();
function num2(a=13,b=12){
    console.log(a+b);
}
num2(15,15);
function num3(a=4,b=5){
    console.log(a-b);
}
num3(3);
function num4(a=5,b){
    console.log(a+b);
}
num4(6)