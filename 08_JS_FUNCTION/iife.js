// In JavaScript, an IIFE (Immediately Invoked Function Expression) is a function that runs immediately after its declaration.

// in iife function we use two parentheses

(function num(){
    console.log("this is immediate invoke function...!");
})();

// with parameter
(function total(a,b){
    console.log(a*b);
})(7,4);
