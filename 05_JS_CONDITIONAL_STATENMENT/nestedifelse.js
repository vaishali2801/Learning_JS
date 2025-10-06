// Nested if...else statements contain one or more if...else statements within another if...else block.

// When we use an if...else statement inside another if...else statement, we create a nested if...else structure.


let point = 7;

if(point >=0 && point <=10){
    if(point >=8){
        console.log("A");
    }else{
        console.log("B");
    }
}
else{
    if(point <0){
        console.log("Invalid point");
    }else{
        console.log("check point again");
    }
}