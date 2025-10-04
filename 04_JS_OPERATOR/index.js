// There are a total of seven types of operators in JavaScript:

// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. Unary Operators
// 7. Miscellaneous Operator


//1.arithmetic operators
let a = 25;
let b = 13;

console.log("add " ,a + b);
console.log("sub " ,a - b);
console.log("mul " ,a * b);
console.log("div " ,a / b);
console.log("module " ,a % b);
console.log("exponential " ,a ** b);

// 2. Assignment Operators

let x = 7;
x += 5;

console.log(x);

x -=4;

console.log(x);

// 3.comparison operators
console.log(5 == "5"); // it is true beacause it only checks value not type

console.log(5 === "5"); // it is false beacause it checks value and type both 

console.log(5 != 10); // true 

console.log("greater ", 26 > 25); // true 

console.log("less" , 8 < 7); // false

// 4.logical operators

let right = true;
let wrong = false;

console.log(right && wrong);
console.log(right || wrong);
console.log(!right);

//5.bitwise operators

let v = 7;
let w = 8;

console.log(v & w );
console.log(v | w);
console.log(v ^ w);

// 6.unary operators

let n = 15;

console.log(n++);
console.log(++n);
console.log(n--);
console.log(--n);

console.log(typeof n);

// 7.miscellaneous operators

let condition;
let num = 23;
condition = num > 10 ? "yes" : "no";

console.log("true or false ?" ,condition);

// typeof operator

console.log(typeof null)
