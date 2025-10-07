// The do…while loop can be used to execute a specific block of code at least once.
// Entry-Controlled Loops: In this type of loop, the test condition is checked before entering the loop body.
// Examples: 'for' loop and 'while' loop.

// Exit-Controlled Loops: In this type of loop, the test condition is checked at the end of the loop body.
// Therefore, the loop body will execute at least once, regardless of whether the condition is true or false.
// Example: 'do...while' loop.

let pass =0;

do{

    console.log (pass);
    pass++ // pass = pass + 1

}while(pass <=5);

let i = 12;

do{
    console.log(i); // condition is false but it will execute once
    i++;
}while(i>13);