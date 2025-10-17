// An array in JavaScript is a data structure used to store multiple values in a single variable. 
// It can hold various data types and allows for dynamic resizing. Elements are accessed by their index, starting from 0.

// creating an array using array literals
let number = [10,20,30,40,50,60];
console.log(number);
console.log(typeof number);

// creating using array constructor
let alp = new Array("a" ,"b" , "c" , "d" , "e");

let country = ["India" , "South korea" , "UK" , "US" , "Nepal" , "South africa" , "Dubai" , "russia" , "Germany"]

console.log(country[country.length - 1 ]);
console.log(country);
console.log(country[4]);
console.log(country[2]);

country[5] = "china";
console.log(country);
//push
country.push("ABCD");// add in last
console.log(country);
//unshift
country.unshift("America"); // add in start
console.log(country);
//pop
country.pop(); // remove last element
console.log(country);
//shift 
country.shift(); // remove start 
console.log(country);
//splice
country.splice( 5 , 0 ,"Australia" , "canada");
console.log(country)

country.splice(3,2);
console.log(country);