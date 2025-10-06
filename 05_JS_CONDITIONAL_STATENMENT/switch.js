// The JavaScript switch...case statement executes different blocks of code based on the value of a given expression.

let choice = 3;
switch(choice){

    case 1: console.log("you chose apple");
    break;
    
    case 2: console.log("you chose banana");
    break;

    case 3: console.log("you chose mango");
    break;

    default: console.log("invalid choice");  // we can not use break then above line is also executed
} 