//1.Write a program using reduce() to find the sum of all elements in an array.
// Example: [2, 4, 6, 8] → 20

let number = [2, 4, 6, 8];
let Sum = number.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0)
console.log("Sum all : ", Sum);

//2.Use reduce() to find the product of all numbers in an array.
//Example: [1, 2, 3, 4] → 24

let arr = [1, 2, 3, 4];
let Product = arr.reduce((acc, curr) => {
    acc *= curr;
    return acc;
}, 1);
console.log("Multiplication : ", Product);

//3.Use reduce() to find the maximum number in an array.
// Example: [10, 25, 7, 40, 15] → 40

let num = [10, 25, 7, 40, 15];
let maxNum = num.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
})
console.log("maximum number : ", maxNum);

//4.Use reduce() to count how many times each element appears in an array.
// Example: ['apple', 'banana', 'apple', 'orange', 'banana'] → {apple: 2, banana: 2, orange: 1}

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const count = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(count);

//5.Use reduce() to flatten a 2D array into a single array.
//Example: [[1, 2], [3, 4], [5, 6]] → [1, 2, 3, 4, 5, 6]
const Array = [[1, 2], [3, 4], [5, 6]];
let arrayFlat = Array.reduce((acc, curr) => {
    return acc.concat(curr);
},[]);
console.log("flat array ", arrayFlat);