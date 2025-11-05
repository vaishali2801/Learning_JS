// This method iterates over an array, transforms the array according to user-specified conditions and returns a new array. Using this shorter syntax, one could easily make code more readable and understandable.
//The map() method is used to create a new array by applying a function to each element of an existing array.
let num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
//as given condition work 
let numResult = num.map((number) => number * 3);
console.log("result ", numResult);
// print all number same as 
let result2 = num.map((num) => {
    return num;
})
console.log("result2 ", result2);

//map() = original array → transform → new array

let color = ["red", "white", "black", "blue", "green", "orange"];
//print color name 
let colorResult = color.map((str) => {
    return str;
})
console.log("color name ", colorResult);
//object
const Information = [
    { RollNo: 76895, branch: "IT", BOD: "28/2/2007" },
    { RollNo: 45363, branch: "Civil", BOD: "20/1/2005"},
    { RollNo: 92977, branch: "CE", BOD:"19/9/2006" },
]
//only print branch name 
let personResult = Information.map((person) => {
    return person.branch;
})
console.log("result1 ",personResult);
//only print bod
let personResult1 = Information.map((person) => {
    return person.BOD;
})
console.log("result2 ",personResult1);
//print all object
let personResult2 = Information.map((person) => {
    return person;
})
console.log("result3 ",personResult2);