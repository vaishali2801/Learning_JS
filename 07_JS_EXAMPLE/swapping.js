let temp;
let n1 = 5;
let n2 = 8;

console.log("Before Swap: n1 =", n1, "n2 =", n2);

// Swapping values using a temporary variable
temp = n1;
n1  = n2;
n2 =  temp;

console.log("After Swap: n1 =", n1, "n2 =", n2);

let A = 10;
let B = 20;

console.log("Before Swap: A =", A, "B =", B);

A = A + B;
B = A - B;
A = A - B; 

console.log("After Swap: A =", A, "B =", B);