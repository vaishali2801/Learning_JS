// there are three type of variable 
// we use ES5 - var 
// we use ES6 - let & const
// 1. var
// 2. let
// 3. const
// var has functional scope which means it accessible in function body outside its not accessible if we try to access it we will get an reference error

var name = "vaishali";

console.log(name);

function v1() {
    var n1 = "chauhan vaishali";

    function n2() {
        var content = "helooooo";
        console.log(content);
        console.log(n1);
        console.log(name);
    }
    // content = xyz error
    console.log("name is ->", n1);
    console.log(name);

    n2(); 
}
// console.log(n1); 
// it is not allowed because var is functional scop variable 

v1();

// let 

let age = 19;

console.log(age);


function Age(){
    let v2 = "chauhan";
    console.log(v2);

    v2 = 548934;
    console.log(v2);
}
Age();
// console.log(v2); 
// it is not allow because let is block scop variable so we can't access data outside the block

// const 
// A const variable has block scope, which means it is only accessible within that block.
// When declaring a variable using const, we must assign a value immediately; otherwise, it will generate an error.

const BOD = 28012007;

// BOD = 8763487; 
console.log(BOD);

function bod(){

    const f1 = "my name is blablabla";

    function txt(){
        const cart = "my age is 18";

        console.log(cart);
    }
    txt();
      console.log(f1);
      //console.log(cart);  we cat't access here 
}
bod();

const num = 25;

console.log(num);

// const num = 26;  we can't asign second value in const variable